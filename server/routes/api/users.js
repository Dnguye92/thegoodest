const express = require('express');
const mongodb = require('mongodb');
const User = require('./../../models/User');
const dotenv = require('dotenv');
const router = express.Router();
const auth = require('./../../middleware/auth');
// const jwt = require('jsonwebtoken');
dotenv.config();
const uri = process.env.MONGOURI;

router.post('/users', async (req, res) => {
  const user = new User(req.body)
    try {
      await user.save()
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token })
    } catch (e) {
      console.log('cannot create user because ', e);
      res.status(400).send(e)
    }
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    console.log('User logged in!');
    res.send({ user, token });
  } catch(e) {
    console.log('User cannot login because ', e);
    res.status(400).send('User not found!');
  }
});

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    
    console.log('User logged out!');
    await req.user.save();
    res.send();
  } catch (e) {
    console.log('User cannot logout because ', e);
    res.status(500).send();
  }
});

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['fullName', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findById(req.params.id)

    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router;

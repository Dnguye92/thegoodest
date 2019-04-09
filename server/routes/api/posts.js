const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

const uri = "mongodb+srv://dylan_nguyen:Meatball1@goodapi-c756a.mongodb.net/GoodDB?retryWrites=true";

router.get('/', async (req, res) => {
  const posts = await loadSwipedCollection();
  res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
  const posts = await loadSwipedCollection();
  await posts.insertOne({
    name: req.body.name,
    createdAt: new Date()
  });
  console.log(req.body);
  res.status(201).send();
});

router.delete('/:id', async (req, res) => {
  const posts = await loadSwipedCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  res.status(200).send();
});

async function loadSwipedCollection() {
  const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true });

  return client.db('GoodDB').collection('swiped.collection')
}

module.exports = router;

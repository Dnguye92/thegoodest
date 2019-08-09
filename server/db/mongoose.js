const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dylan_nguyen:Meatball1@goodapi-c756a.mongodb.net/GoodDB?retryWrites=true', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
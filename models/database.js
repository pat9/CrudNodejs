const mongoose = require('mongoose');

mongoose.connect("mongodb://den1.mongo1.gear.host:27001/personascrud", {
    auth: {
      user: "personascrud",
      password: "Ba43P7J~8?sU"
    },
     useNewUrlParser: true 
}).then(_=>console.log('Database conectada'));

module.exports = mongoose;
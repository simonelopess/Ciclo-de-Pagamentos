const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //correção de bugs
module.exports = mongoose.connect('mongodb://localhost/mymoney');
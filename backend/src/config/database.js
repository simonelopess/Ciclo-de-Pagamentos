const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //correção de bugs
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true });

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o valor mínimo de '{MIN}' "
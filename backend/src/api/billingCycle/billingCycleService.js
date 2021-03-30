const BillingCycle = require('./billingCycle');

//criação dos serviços REST

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true}) // traz sempre a nova informação pós atualização e validar no update

module.exports = BillingCycle;

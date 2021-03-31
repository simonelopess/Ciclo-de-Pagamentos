const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    //URL base
    server.use('/api', router)

    //rotas ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles')

}
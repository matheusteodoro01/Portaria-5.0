const Registration = require('../models/Registration');


module.exports = {
    async store(req, res) {
        const { name, cpf, rg, city, state, phone, company } = req.body;

        const registration = await Registration.create({ name, cpf, rg, city, state, phone, company })

        return res.json(registration);
    }
}
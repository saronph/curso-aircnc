//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {email} = req.body;

        let user = await User.findOne({ email });

        if (!user) { //se ele nao encontrar esse usuário, ele o cria
            user = await User.create({ email });
        }       

        return res.json(user);
    }
};
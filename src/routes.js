const { Router } = require('express');

const User = require('./app/models/User');

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Diego Moreira',
        email: 'diego@teste.com',
        password_hash: '123456',
    });

    return res.json(user);
});

module.exports = routes;

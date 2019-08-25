const jwt = require('jsonwebtoken');

const User = require('../models/User');

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        
    }
}

module.exports = new SessionController();

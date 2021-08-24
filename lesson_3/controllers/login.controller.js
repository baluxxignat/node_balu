const path = require('path');
const fs = require('fs/promises');

module.exports = {
    getLoginPage: (req, res) => {
        res.render('login');
    },

    postLoginVerification: async (req, res) => {
        const pathToDatabase = path.join(__dirname, '../database', 'users.json');
        const { email, password } = req.body;
        const readUsers = await fs.readFile(pathToDatabase, 'utf-8');
        const parseUsers = JSON.parse(readUsers);
        const userById = parseUsers.find((user) => user.email === email && user.password === password);
        if (userById) {
            res.render('users', { parseUsers });
            return;
        }
        res.render('welcome');
    },
};

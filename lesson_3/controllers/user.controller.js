const path = require('path');
const fs = require('fs/promises');
const db = require('../database/users.json');

const pathToDatabase = path.join(__dirname, '../database', 'users.json');

module.exports = {
    // Get Single User
    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const user = db[user_id];

        if (!user) {
            res.status(404).json('user not found');
            return;
        }
        res.json(user);
    },

    getAllUsers: async (req, res) => {
        const readUsers = await fs.readFile(pathToDatabase, 'utf-8');
        const parseUsers = JSON.parse(readUsers);
        res.render('users', { parseUsers });
    },

    createUser: async (req, res) => {
        console.log(req.body);
        const readUsers = await fs.readFile(pathToDatabase, 'utf-8');
        const parseUsers = JSON.parse(readUsers);
        const { email, password, password2 } = req.body;
        const sameUserEmail = parseUsers.find((user) => user.email === email);

        // Same email
        if (sameUserEmail) {
            res.status(404).send('User exist');
            return;
        }
        parseUsers.push(req.body);
        await fs.writeFile(pathToDatabase, JSON.stringify(parseUsers));
        res.render('users', { parseUsers });

        // Check required fields
        if (!email || !password || !password2) {
            res.status(404).send('Please fill in all fields');
        }

        // Check passwords match
        if (password !== password2) {
            res.status(404).send('Password do not match');
        }

        // Check pass length
        if (password.length < 5) {
            res.status(404).send('Password should be at least 5 characters');
        }
    }

};

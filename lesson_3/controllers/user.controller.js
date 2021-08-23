const db = require('../database/users.json');

module.exports = {
    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const user = db[user_id];

        if (!user) {
            res.status(404).json('user not found');
            return;
        }

        res.json(user);
    },

    getAllUsers: (req, res) => {
        res.json('AllUsers');
    },

    createUser: (req, res) => {
        res.json('createUser');
    },

    addNewUser: (req, res) => {
        res.json('addNewUser');
    }
};

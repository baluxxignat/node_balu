const router = require('express').Router();

router.post('/', (req, res) => {
    res.send('postUser');
});

// Login Page
router.get('/login', ((req, res) => {
    res.send('Login');
}));

// Register Page
router.get('/register', ((req, res) => {
    res.send('Register');
}));

module.exports = router;

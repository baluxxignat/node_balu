const router = require('express').Router();

const { userController } = require('../controllers');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:user_id', userController.getSingleUser);
router.put('/:user_id', userController.addNewUser);

module.exports = router;

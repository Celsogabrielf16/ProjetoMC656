const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/login', (req, res) => {
    UserController.login(req, res);
});

module.exports = router;

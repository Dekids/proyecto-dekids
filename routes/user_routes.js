const express = require('express');

let UsersController =  require('../controllers/users');
let router = express.Router();
router.route('/user/password').get(UsersController.editPass)
                              .put(UsersController.updatePass);

module.exports = router;

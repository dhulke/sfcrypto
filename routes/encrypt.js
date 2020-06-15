const express = require('express');
const router = express.Router();

const { Encrypt } = require('../usecases/encrypt');


router.post('/', function(req, res, next) {
    const encryptUseCase = new Encrypt;
    res.end(encryptUseCase.run(req.body));
});

module.exports = router;

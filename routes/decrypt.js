var express = require('express');
var router = express.Router();

const { Decrypt } = require('../usecases/decrypt');


router.post('/', function(req, res, next) {
  const decryptUseCase = new Decrypt;
  res.end(decryptUseCase.run(req.body));
});

module.exports = router;

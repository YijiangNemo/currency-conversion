var express = require('express');
var router = express.Router();
var sql_OP = require('../controllers/sqlController')

router.get('/pairs', function(req, res, next) {
  sql_OP.findAll()
      .then((response) => {
        res.status(response.status).json({ 'message': response.msg, 'data': response.data, 'status': response.status });
      }).catch((err) => {

    res.status(err.status).json({ 'message': err.msg, 'data': err.data, 'status': err.status });
  })
});


router.post('/pairs', function(req, res, next) {
  let data = req.body.data;
  sql_OP.addPairs(data)
      .then((response) => {
        res.status(response.status).json({ 'message': response.msg, 'data': response.data, 'status': response.status });
      }).catch((err) => {

    res.status(err.status).json({ 'message': err.msg, 'data': err.data, 'status': err.status });
  })
});


router.delete('/pairs', function(req, res, next) {
  let idList = req.body.data;
  sql_OP.deletePairs(idList)
      .then((response) => {
        res.status(response.status).json({ 'message': response.msg, 'data': response.data, 'status': response.status });
      }).catch((err) => {

    res.status(err.status).json({ 'message': err.msg, 'data': err.data, 'status': err.status });
  })
});

module.exports = router;

var express = require('express');
var router = express.Router();
const {v4 : uuid} = require ("uuid");
let users = [
  {
      id: uuid(),
      username: 'Hector',
      comment: 'Es de Villena'
  },
  {
      id: uuid(),
      username: 'Alfonso',
      comment: 'Es de Cañada'
  },
  {
      id: uuid(),
      username: 'Angel',
      comment: 'Es de Novelda'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users, title: 'Users' });
});

module.exports = router;

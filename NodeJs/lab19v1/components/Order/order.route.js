const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('Orders Get');
});
router.post('/', (req, res, next) => {
  res.send('Orders Post');
});
router.put('/', (req, res, next) => {
  res.send('Orders Put');
});
router.delete('/', (req, res, next) => {
  res.send('Orders Delete');
});
module.exports = router;
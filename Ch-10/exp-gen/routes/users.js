var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("user",{
    title:"Listing",
    message:"Listing message",
  });
});

module.exports = router;

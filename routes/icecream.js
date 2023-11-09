var express = require('express');
const icecream_controller = require('../controllers/icecream');
var router = express.Router();

/* GET costumes */
router.get('/', icecream_controller.icecream_view_all_Page );
module.exports = router;


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('icecream', { title: 'Search Results for icecream' });
// });

module.exports = router;
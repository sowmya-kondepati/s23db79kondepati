var express = require('express');
const icecream_controller = require('../controllers/icecream');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET icecreams */
router.get('/', icecream_controller.icecream_view_all_Page );
/* GET detail icecream page */
router.get('/detail', secured, icecream_controller.icecream_view_one_Page );
/* GET create costume page */
router.get('/create',  secured,icecream_controller.icecream_create_Page);
/* GET create update page */
router.get('/update', secured, icecream_controller.icecream_update_Page);
/* GET delete costume page */
router.get('/delete', secured, icecream_controller.icecream_delete_Page);



module.exports = router;
var express = require('express');
const icecream_controller = require('../controllers/icecream');
var router = express.Router();

/* GET icecreams */
router.get('/', icecream_controller.icecream_view_all_Page );
/* GET detail icecream page */
router.get('/detail', icecream_controller.icecream_view_one_Page );
/* GET create costume page */
router.get('/create', icecream_controller.icecream_create_Page);
/* GET create update page */

router.get('/update', icecream_controller.icecream_update_Page);
/* GET delete costume page */
router.get('/delete', icecream_controller.icecream_delete_Page);



module.exports = router;
var icecream = require('../models/icecream');
// List of all icecream
exports.icecream_list = async function (req, res) {
    try {
        theicecream = await icecream.find();
        res.send(theicecream);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theicecream = await icecream.find();
        res.render('icecream', { title: 'icecream Search Results', results: theicecream });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific icecream.
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};

// Handle icecream delete form on DELETE.
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle icecream update form on PUT.
exports.icecream_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};
 




// Handle icecreams create on POST.
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new icecream();
    document.icecream_flavours = req.body.icecream_flavours;
    document.icecream_price = req.body.icecream_price;
    document.icecream_quantity = req.body.icecream_quantity;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
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
exports.icecream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await icecream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle icecream delete form on DELETE.
// Handle Icecream delete on DELETE.
exports.icecream_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await icecream.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle icecream update form on PUT.
exports.icecream_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById(req.params.id)
        // Do updates of properties
        if (req.body.icecream_type)toUpdate.icecream_type = req.body.icecream_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// Handle a show one view with id specified by query
exports.icecream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await icecream.findById( req.query.id)
    res.render('icecreamdetail',    { title: 'icecream Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.icecream_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('icecreamcreate', { title: 'icecream Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
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
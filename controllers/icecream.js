var icecream = require('../models/icecream');
// List of all icecreams
exports.icecream_list = async function(req, res) {
    //List of all icecreams
    exports.icecream_list = async function(req, res) {
    try{
    theicecreams = await icecream.find();
    res.send(theicecreams);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
};
// for a specific icecream.
exports.icecream_detail = function(req, res) {
res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle icecream create on POST.
exports.icecream_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: icecream create POST');
};
// Handle icecream delete form on DELETE.
exports.icecream_delete = function(req, res) {
res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle icecream update form on PUT.
exports.icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};


    
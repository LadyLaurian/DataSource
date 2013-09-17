exports.findAll = function(req, res) {
    res.send([{name:'ep1'}, {name:'ep2'}, {name:'ep3'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
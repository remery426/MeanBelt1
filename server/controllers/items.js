var mongoose = require('mongoose');
var Item = mongoose.model('Item');


module.exports = (function(){
    return{
        addItem: function(req,res){
            var item = new Item(req.body)
            item.save();
            res.json(null)


            
        },
        getAllItems: function(req,res){
            Item.find({}, function(err,data){
               res.json(data)
           }) 
        },
        changeStatus: function(req,res){
            Item.findById({_id:req.body._id}, function(err,data){
                data.status = req.body.status;
                data.save();
                res.json(data)

            })
        }
    
    }
})()
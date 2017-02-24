var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var ItemSchema = new Schema({
    title: {type:String, required: true, minlength:5,},
    description: {type:String, require:  true, minlength:10},
    creator: {type:String},
    user: {type:String},
    status: {type: String},
    created_at: {type: Date}
    
})

mongoose.model('Item', ItemSchema);
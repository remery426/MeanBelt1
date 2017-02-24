var user = require('./../controllers/users.js')
var item = require('./../controllers/items.js')

module.exports = function(app){
    app.post('/login', function(req,res){
        user.login(req, res)
    })
    app.get('/checkStatus', function(req,res){
        user.checkStatus(req,res)
    })
    app.post('/logout', function(req,res){
        user.logout(req,res)
    })
    app.get('/getAll', function(req,res){
        user.getAll(req,res)
    })
    app.post("/addItem", function(req,res){
        item.addItem(req,res)
    })
    app.get("/getAllItems", function(req,res){  
        item.getAllItems(req,res)
    })
    app.post("/changeStatus", function(req,res){
        item.changeStatus(req,res)
    })
}
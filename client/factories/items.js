app.factory('itemFactory', function($http, $location, $route){
    var factory = {};
    factory.addItem = function(item)
    {
        console.log(item, "item in the factory")
        $http.post("/addItem",item ).then(function(){
            $route.reload();
        })
    }
    factory.getAllItems = function(cb){
        console.log("made it to the get all factory!")
        $http.get("/getAllItems").then(function(output){
            cb(output.data)
        })
    }
    factory.changeStatus = function(item){
        console.log(item)
        $http.post("/changeStatus", item).then(function(){
            $route.reload();
        })
    }

    return factory 

})
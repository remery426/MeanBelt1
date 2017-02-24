app.controller('itemController', function($scope, userFactory, itemFactory, $routeParams){

    userFactory.getAll(function(data){
        $scope.all_users = data
        })
    userFactory.checkStatus(function(data){
        
        $scope.current_user = data
        })


    $scope.addItem = function(newItem){
        if(!$scope.newItem||!$scope.newItem.title || !$scope.newItem.description || $scope.newItem.title.length<5 || $scope.newItem.description.length<10){
            alert("Description and Title fields are mandatory and must be greater than 5 and 10 characters respectively!")
        }
        else{
        $scope.newItem.creator = $scope.current_user.name
        $scope.newItem.created_at = new Date()
        $scope.newItem.status = "Pending"
        itemFactory.addItem($scope.newItem);

        }
    }

       itemFactory.getAllItems(function(data){
        userFactory.checkStatus(function(data){
           $scope.current_user = data  
        })
        
        $scope.my_items = [];
        $scope.user_items = [];
        $scope.complete = []
        $scope.all_items = data
        if($routeParams){
            $scope.my_user = $routeParams.name
        }
    for(var i = 0; i <$scope.all_items.length; i++){
        if($scope.current_user.name == $scope.all_items[i].creator || $scope.current_user.name == $scope.all_items[i].creator){
            $scope.my_items.push($scope.all_items[i])
        }
    }
    console.log($scope.my_items)
        if($routeParams){
            for(var i = 0; i <$scope.all_items.length; i++){
                if($scope.all_items[i].creator==$routeParams.name || $scope.all_items[i].user == $routeParams.name){
                    if($scope.all_items[i].status=="Pending"){
                        $scope.user_items.push(($scope.all_items[i]));
                    }
                    else{
                        $scope.complete.push(($scope.all_items[i]));
                    }
                    
                }
            }
   

        }


    })
            $scope.changeStatus= function(item){
                if($scope.current_user.name != item.user && $scope.current_user.name != item.creator){
                    alert("Cannot change status dude. Not you item")
                }
                else{
                if(item.status == "Pending"){
                    item.status = "Complete"
                }
                else{
                    
                    item.status = "Pending"
                }
                itemFactory.changeStatus(item);
        }
            }
    
})

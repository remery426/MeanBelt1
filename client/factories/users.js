app.factory('userFactory', function($http, $location, $route){
    var factory = {};
    factory.login = function(user){
        
        console.log(user)
        $http.post('/login', user).then(function(output){
            {
                
                if(output.data){
                    $location.url("/dash")
                }
            }

        })
    }
        factory.checkStatus = function(cb){
            $http.get('/checkStatus').then(function(output){
            if(!output.data){
                
                $location.url('/')
            }else{
                cb(output.data)
            }
            })
        }
        factory.logout = function(){
            $http.post('/logout').then(function(){
                $location.url('/');
            })
        }
        factory.getAll = function(cb){
            $http.get('/getAll').then(function(output){
                cb(output.data)
            })
        }
    return factory 

})
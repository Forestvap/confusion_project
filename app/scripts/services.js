'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        
        .service('menuFactory', ['$resource','baseURL', function($resource,baseURL) {
    
                this.getDishes = function(){
                    
                    return $resource(baseURL+"dishes/:id", null,{'update':{method:'PUT'}});
                    
                };
    
              
    
    
    
    this.getPromotion = function(){
        return $resource(baseURL + "promotions/:id", null, {'update':{method:'PUT'}});
    };
    
     /*this.getPromotions = function(){
        return promotions[];
    };*/
    
    
                                           
                // implement a function named getPromotion
                // that returns a selected promotion.
                                        
                        
        }])
        

        .service('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
            
    
    
                this.getLeaders = function(){ 
                    
                    return $resource(baseURL+"leadership/:id",null, {'update':{method:'PUT'}});
                    
                };
    
              /*  this.getLeader = function (index) {
                    
                    return leadership[index];
                };*/
     
        
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
    
    
        }])

;

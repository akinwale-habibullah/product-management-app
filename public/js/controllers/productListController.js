(
    function(){
        "use strict";

        angular.module('productManagement')
            .controller('ProductListController',
                        [
                            'productResource',
                            ProductListController
                        ]);

        function ProductListController(productResource){
            var model = this;
            
            productResource.query(function(data){
                model.products = data;
            });
      
            model.showImage = false;
            model.toggleImage = function(){
                model.showImage = !model.showImage;
            };
        }
    } ()  
);

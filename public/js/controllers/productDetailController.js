(
    function(){
        "use strict";

        angular.module('productManagement')
            .controller('ProductDetailController',
                        [
                            'productResource',
                            ProductDetailController
                        ]);

        function ProductDetailController(productResource){
            var model = this;
            model.greeting = 'Product Detail Controller - Greeting'
        }
    } ()  
);

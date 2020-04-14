(
    function(){
        "use strict";

        angular.module('productManagement')
            .controller('ProductEditController',
                        [
                            'productResource',
                            ProductEditController
                        ]);

        function ProductEditController(productResource){
            var model = this;
            model.greeting = 'Product Edit Controller - Greeting'
        }
    } ()  
);

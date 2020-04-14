(
    function(){
        "use strict";

        angular.module('productManagement')
            .controller('ProductAddController',
                        [
                            'productResource',
                            ProductAddController
                        ]);

        function ProductAddController(productResource){
            var model = this;
            model.greeting = 'Product Add Controller - Greeting'
        }
    } ()  
);

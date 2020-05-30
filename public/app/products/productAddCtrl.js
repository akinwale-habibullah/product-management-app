(
    function(){
        "use strict";

        angular
            .module('productManagement')
            .controller('ProductAddCtrl', [
                'productResource',
                ProductAddCtrl
            ]);

        function ProductAddCtrl(productResource){
            var vm = this;
            vm.greeting = 'Product Add Controller - Greeting'
        }
    } ()  
);

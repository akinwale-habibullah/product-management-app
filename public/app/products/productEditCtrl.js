(
    function(){
        "use strict";

        angular
            .module('productManagement')
            .controller('ProductEditCtrl', [
                'product',
                'productService',
                '$state',
                '$transitions',
                ProductEditCtrl
            ]);

        function ProductEditCtrl(product, productService, $state, $transitions){
            var vm = this;

            vm.product = product;
            vm.tag = '';
            vm.marginType = 'percentage';
            vm.marginPercent = 0;
            vm.marginAmount = "0";

            if (vm.product && vm.product.productId) {
                vm.title = "Edit: " + vm.product.productName;
            } else {
                vm.title = "New Product";
            }

            vm.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                vm.opened = !vm.opened;
            }

            vm.submit = function(isValid) {
                if (isValid) {
                    vm.product.$save().then(function() {
                        // TODO: Get dialog header and body elements and set both value then show
                        $('#success-toast').toast('show');
    
                        // TODO: Redirect to another route
                        // $state.go('productEdit.price');
                    });
                } else {
                    $('#error-toast').toast('show');
                }
            }

            vm.cancel = function() {
                $state.go('productList');
            }

            vm.addTag = function() {
                if (vm.product.tags.includes(vm.tag)) {
                    alert('Tag already exists. Duplicate tags are not allowed.');
                    return; 
                }

                if (vm.tag) {
                    vm.product.tags.push(vm.tag);
                    vm.tag = '';
                }
            }

            vm.removeTag = function(index) {
                vm.product.tags.splice(index, 1);
            }

            vm.back = function() {
                $state.go('productEdit.price');
            }

            vm.selectMarkup = function(type) {
                if (type === 'percentage') {
                    vm.marginType = 'percentage';
                } else if (type === 'amount') {
                    vm.marginType = 'amount';
                }
            }

            vm.calculatePrice = function() {
                if (vm.marginType === 'percentage') {
                    vm.product.price = productService.calculatePriceFromMarkupPercent(vm.product.cost, vm.marginPercent);
                } else if (type === 'amount') {
                    console.log(typeof vm.marginAmount);
                    vm.product.price = productService.calculateCostFromMarkupAmount(vm.product.cost, parseInt(vm.marginAmount));
                }
            }

            vm.calculateMargin = function() {
                if (vm.marginType === 'percentage') {
                    return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
                } else if (type === 'amount') {
                    return productService.calculateMarginAmount(vm.product.price, vm.product.cost);
                }
            }

        }
    } ()
);

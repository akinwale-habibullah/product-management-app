(
    function(){
        "use strict";

        angular
            .module('productManagement')
            .controller('ProductEditCtrl', [
                'product',
                '$state',
                '$transitions',
                ProductEditCtrl
            ]);

        function ProductEditCtrl(product, $state, $transitions){
            $transitions.onStart({
                to: function(state){
                    // TODO: make toasts show. It doesnt show presently
                    if(state.self.name == 'productEdit.tags') {
                        $('.toast').toast('show');
                        console.log('Make toast show');
                    };
                },
                from: function(state) {}
            }, function() {});

            var vm = this;

            vm.product = product;
            vm.tag = '';

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

            vm.submit = function() {
                vm.product.$save().then(function() {
                    // $state.go('productEdit.price');
                });
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

        }
    } ()
);

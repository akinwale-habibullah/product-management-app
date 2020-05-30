(
    function() {
        "use strict";

        var app = angular
            .module('productManagement', [
                'common.services',
                'ui.router',
                'productResourceMock'
            ]);

        app.config([
            '$stateProvider',
            '$urlRouterProvider',
            configureRoutes
        ]);

        function configureRoutes($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/welcomeView.html'
                })
                .state('productList', {
                    url: '/products',
                    templateUrl: 'app/products/productListView.html',
                    controller: 'ProductListCtrl as vm'
                })
                .state('productEdit', {
                    abstract: true,
                    url: '/products/edit/:productId',
                    templateUrl: 'app/products/productEditView.html',
                    controller: 'ProductEditCtrl as vm',

                    resolve: {
                        productResource: 'productResource',

                        product: function(productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource
                                .get({ productId: productId})
                                .$promise;
                        }
                    }
                })
                .state('productEdit.info', {
                    url: '/info',
                    templateUrl: 'app/products/productEditInfoView.html'
                })
                .state('productEdit.price', {
                    url: '/price',
                    templateUrl: 'app/products/productEditPriceView.html'
                })
                .state('productEdit.tags', {
                    url: '/tags',
                    templateUrl: 'app/products/productEditTagsView.html'
                })
                .state('productAdd', {
                    url: '/products/edit',
                    templateUrl: 'app/products/productAddView.html',
                    controller: 'ProductAddCtrl as vm'
                })
                .state('productDetail', {
                    url: '/products/detail/:productId',
                    templateUrl: 'app/products/productDetailView.html',
                    controller: 'ProductDetailCtrl as vm',

                    resolve: {
                        productResource: 'productResource',

                        product: function(productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            return productResource
                                .get({ productId: productId})
                                .$promise;
                        }
                    }
                });
        }
    } ()
);
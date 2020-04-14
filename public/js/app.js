(
    function(){
        "use strict";
        angular
            .module('productManagement',
                [
                    'common.services',
                    'ui.router',
                    'productResourceMock',
                ]
            )
            .config([
                '$stateProvider',
                '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/');

                    $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: "views/welcomeView.html"
                        })
                        .state('productList', {
                            url: '/products',
                            templateUrl: 'views/productListView.html',
                            controller: 'ProductListController as Ctrl'
                        })
                        .state('productDetail', {
                            url: '/products/:productId',
                            templateUrl: 'views/productDetailView.html',
                            controller: 'ProductDetailController as Ctrl'
                        })
                        .state('productEdit', {
                            url: '/products/edit/:productId',
                            templateUrl: 'views/productEditView.html',
                            controller: 'ProductEditCtrl as Ctrl'
                        })
                        .state('productAdd', {
                            url: '/products/add/:productId',
                            templateUrl: 'views/productAddView.html',
                            controller: 'ProductAddCtrl as Ctrl'
                        });
                } 
            ]);
    }()
);

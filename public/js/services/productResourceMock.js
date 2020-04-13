(
    function(){
        "use strict";

        angular
            .module('productResourceMock',[ 'ngMockE2E' ])
            .run(function ($httpBackend){
                var products = [
                    {
                        'productId': 1,
                        'productName': 'Leaf Rake',
                        'productCode': 'GDN-0011',
                        'releaseDate': 'March 19, 2009',
                        'description': 'Leaf rake with 48-inch handle',
                        'cost': 9.00,
                        'price': 19.55,
                        'category': 'garden',
                        'tags': ['leaf', 'tool'],
                        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous'
                    },
                    {
                        'productId': 5,
                        'productName': 'Hammer',
                        'productCode': 'TBX-00148',
                        'releaseDate': 'May 21, 2013',
                        'description': 'Curved claw steel hammer',
                        'cost': 1.00,
                        'price': 8.99,
                        'category': 'toolbox',
                        'tags': ['tool'],
                        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer'
                    }
                ];
        
                var productUrl = '/api/products';
                $httpBackend.whenGET(productUrl).respond(products);

                var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
                $httpBackend.whenGET(editingRegex).respond(function(method, url, data){
                    console.log('method', method);
                    console.log('url', url);
                    console.log('data', data);

                    var product = {"productId": 0};
                    var parameters = url.split('/');
                    var length = parameters.length;
                    var id = parameters[length - 1];

                    if (id > 0) {
                        for (var index = 0; index < products.length; index++) {
                            if (products[index].productId == id) {
                                product = products[id];
                                break;
                            }
                        };
                    }
                    return [200, product, {}];
                });

                $httpBackend.whenPOST(productUrl).respond(function(method, url, data){
                    var product = angular.fromJson(data);

                    if (!product.productId) {
                        // new product Id
                        product.productId = products[products.length - 1].productId + 1;
                        products.push(product);
                    } else {
                        // updated product
                        for (var index = 0; index < products.length; index++) {
                            if (products[index].productId == product.productId) {
                                products[index] = product;
                                break;
                            }
                        };
                    }
                    return [200, product, {}];
                });

                // Pass through any request for application files
                $httpBackend.whenGET(/app/).passThrough();
            });
    }()
);
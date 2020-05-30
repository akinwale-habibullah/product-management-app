(
    function(){
        "use strict";

        var app = angular
                    .module('productResourceMock',['ngMockE2E']);
        
        app.run(function ($httpBackend){

            // console.log('httpBackend');
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
                    'productId': 2,
                    'productName': 'Hammer',
                    'productCode': 'TBX-00148',
                    'releaseDate': 'May 21, 2013',
                    'description': 'Curved claw steel hammer',
                    'cost': 1.00,
                    'price': 8.99,
                    'category': 'toolbox',
                    'tags': ['tool'],
                    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer'
                },
                {
                    'productId': 3,
                    'productName': 'Video Game Controller',
                    'productCode': 'GMG-0042',
                    'releaseDate': 'October 15, 2002',
                    'description': 'Standard two-button video game controller',
                    'cost': 2.22,
                    'price': 35.95,
                    'category': 'gaming',
                    'tags': ['gaming', 'controller', 'video games'],
                    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer'
                },
                {
                    "productId": 4,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March  18, 2010",
                    "description": "15 gallon capacity rolling garden  cart",
                    "cost": 20.00,
                    "price": 32.99,
                    "category": "garden",
                    "tags": [ "barrow", "cart", "wheelbarrow" ],
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous"
                }
            ];
    
            var productUrl = '/api/products';
            $httpBackend.whenGET(productUrl).respond(products);

            var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function(method, url, data){

                var product = {"productId": 0};
                var parameters = url.split('/');
                var length = parameters.length;
                var id = parameters[length - 1];

                if (id > 0) {
                    for (var index = 0; index < products.length; index++) {
                        if (products[index].productId == id) {
                            product = products[index];
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

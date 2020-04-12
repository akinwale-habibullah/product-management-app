(
    function(){
        "use strict";

        angular.module('productManagement')
            .controller('ProductListController', ProductListController);
        
        
        function ProductListController() {
            var model = this;
            model.showImage = false;

            model.products = [
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

            model.toggleImage = function(){
                model.showImage = !model.showImage;
            };
        }
    }()  
);

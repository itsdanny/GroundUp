guApp.factory('ProductData', function () {
    return {
        products: [
                       {
                           ProductID: '1',
                           Name: 'Milk',
                           ProductDescription:'Some fine wholesome milk from yorkshire cows.',
                           Images: [{
                               ImageName: 'SilverTop',
                               ImgageURL: '/content/images/products/SilverTop.jpg',
                               PricePerUnit: '65p',
                               Description: 'Pastuerised milky',
                           },
                          {
                              ImageName: 'GreenTop',
                              ImgageURL: '/content/images/products/GreenTop.jpg',
                              PricePerUnit: '64p',
                              Description: 'UnPastuerised milky'
                          }]
                       },
                       {
                           ProductID: '2',
                           Name: 'Cream',
                           ProductDescription: 'Some fine wholesome cream from yorkshire cows.',
                           Images: [{
                               ImageName: 'SilverTop',
                               ImgageURL: '/content/images/products/SilverTop.jpg',
                               PricePerUnit: '65p',
                               Description: 'Pastuerised milky',
                           },
                         {
                             ImageName: 'GreenTop',
                             ImgageURL: '/content/images/products/GreenTop.jpg',
                             PricePerUnit: '64p',
                             Description: 'UnPastuerised milky'
                         }]
                       },
                        {
                            ProductID: '3',
                            Name: 'Eggs',
                            ProductDescription: 'Some fine wholesome eggs from yorkshire chickens.',
                            Images: [{
                                ImageName: 'SilverTop',
                                ImgageURL: '/content/images/products/SilverTop.jpg',
                                PricePerUnit: '65p',
                                Description: 'Pastuerised milky',
                            },
                         {
                             ImageName: 'GreenTop',
                             ImgageURL: '/content/images/products/GreenTop.jpg',
                             PricePerUnit: '64p',
                             Description: 'UnPastuerised milky'
                         }]
                        },
                       {
                           ProductID: '4',
                           Name: 'Veg Boxes',
                           ProductDescription: 'Some fine veg from yorkshire farms.',
                           Images: [{
                               ImageName: 'SilverTop',
                               ImgageURL: '/content/images/products/SilverTop.jpg',
                               PricePerUnit: '65p',
                               Description: 'Pastuerised milky',
                           },
                         {
                             ImageName: 'GreenTop',
                             ImgageURL: '/content/images/products/GreenTop.jpg',
                             PricePerUnit: '64p',
                             Description: 'UnPastuerised milky'
                         }]
                       }]
    }
});
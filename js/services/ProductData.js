guApp.factory('ProductData', function () {
    return {
        products: [
                       {
                           ProductID: '1',
                           ProductName: 'Milk',
                           ProductDescription: 'Some fine wholesome milk from yorkshire cows.',
                           active:true,
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
                           ProductName: 'Cream',
                           ProductDescription: 'Some fine wholesome cream from yorkshire cows.',
                           active:false,
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
                            ProductName: 'Eggs',
                            ProductDescription: 'Some fine wholesome eggs from yorkshire chickens.',
                            active: false,
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
                           ProductName: 'Veg Boxes',
                           ProductDescription: 'Some fine veg from yorkshire farms.',
                           active: false,
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
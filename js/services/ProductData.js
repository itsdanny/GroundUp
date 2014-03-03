guApp.factory('ProductData', function () {
    return {
        products: [
                       {
                           ProductID: '1',
                           ProductName: 'Milk and Cream',
                           ProductDescription: 'Milk and cream are supplied by a fabulous Yorkshire herd of Friesians who are looked after by a local farmer',
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
                           ProductDescription: 'Veg boxes are supplied where possible using Yorkshire produce. Whilst seasonal variations and customer requests do not always allow this, we always ensure produce is fresh and healthy.',
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
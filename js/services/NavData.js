guApp.factory('NavData', function () {
    return {
        nav: [{
            Page: 'Products',
            Url: '#/products'
        },
                       {
                           Page: 'About',
                           Url: '#/about'
                       },
                       {
                           Page: 'Contact',
                           Url: '#/contact'
                       },
                       {
                           Page: 'Sell Your Bales',
                           Url: '#/balesale'
                       }
        ]
    }
});
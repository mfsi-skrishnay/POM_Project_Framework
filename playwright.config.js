const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
   // workers: 4,
    reporter:[['html'],'allure-playwright' ],
   // reporter: [['html'],['list'],['./reporters/CustomReporter.js'],['github'],['allure-playwright']],
    wishlistUrl: '/hz/wishlist/ls/',
    
    use: {
        baseURL: 'https://www.amazon.in',
        browserName: 'chromium',
        headless: false,
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        demoApiUrl: 'https://restful-booker.herokuapp.com',
    },

    projects: [

        {
            name: 'Chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },


    
        // { 
        //     name: 'Mobile Safari', 
        //     use: { 
        //         ...devices['iPhone 14'] 
        //     } 
        // },
    //     {
    //     name: 'Firefox',
    //     use: {
    //         ...devices['Desktop Firefox']
    //     }
    // },

    // {
    //     name: 'WebKit',
    //     use: {
    //         ...devices['Desktop Safari']
    //     }
    // }

    ],

});
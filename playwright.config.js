const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
   // workers: 4,
    reporter:'html' ,
    //reporter: [['html'],['list'],['./reporters/CustomReporter.js'],['github'],['allure-playwright']],
    // reporter: 'list',                                          
    // reporter: 'dot',                                           
    // reporter: 'line',                                          
    // reporter: [['json', { outputFile: 'results.json' }]],      
    // reporter: [['junit', { outputFile: 'results.xml' }]],      
    // reporter: [['blob', { outputDir: 'blob-report' }]],       
    // reporter: [['github']],                                    
    // reporter: [ ['list'],['html', { outputFolder: 'playwright-report', open: 'never' }],['junit', { outputFile: 'results.xml' }] ],
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
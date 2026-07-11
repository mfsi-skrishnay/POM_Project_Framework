const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    //timeout: 60000,
    expect: {
       // timeout: 10000
    },
    reporter: 'html',

    use: {
        baseURL: 'https://www.amazon.in',
        browserName: 'chromium',
        headless: false,
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure', 
    },

    projects: [

        {
            name: 'Chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
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

    ]

});
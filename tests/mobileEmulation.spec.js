const { test,chromium, devices } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');

let homePageobj,searchResultsPageobj,productDetailsPageobj;

test('Scenario 1 using mobile emulation - Product Search and Product Details Validation', async () => { 
    
    const DEVICE = 'iPhone 14'; 
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext({
        ...devices[DEVICE]
    });

    const page = await context.newPage();
    const isMobile = true;
    //const isMobile = test.info().project.name.includes('Mobile'); //Detect current project from config


    homePageobj = new HomePage(page, isMobile);
    searchResultsPageobj = new SearchResultsPage(page, isMobile);
    
    const homepageTitle = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
    const productName = 'Laptop';
    const expectedTitle = 'Laptop';
    const productIndex = 0;

    // Step 1 : Open Amazon Home Page
    await homePageobj.navigateToHomePage();

    // Validate Home Page
    await homePageobj.validateHomePage(homepageTitle);        

    // Step 2 : Search Product
    await homePageobj.searchProduct(productName);

    // Validate Search Results
    await searchResultsPageobj.validateSearchResults(productName);

    // Step 3 : Open First Product
    const productPage = await searchResultsPageobj.openProduct(productIndex);

    productDetailsPageobj = new ProductDetailsPage(productPage, isMobile);

    // Validate Product Page
    await productDetailsPageobj.validateProductPage();    

    // Step 4 : Validate Product Details
    await productDetailsPageobj.validateProductDetails(expectedTitle);    

    // Step 5 : close the searchResult 
    await productDetailsPageobj.returnToSearchResults();         

  

    });


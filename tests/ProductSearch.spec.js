const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');

let homePageobj,searchResultsPageobj,productDetailsPageobj;

test('Scenario 1 - Product Search and Product Details Validation', async ({ page }) => {

    homePageobj = new HomePage(page);
    searchResultsPageobj = new SearchResultsPage(page);
    
    const homepageTitle = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
    const productName = 'iPhone 15';
    const expectedTitle = 'iPhone';
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

    productDetailsPageobj = new ProductDetailsPage(productPage);

    // Validate Product Page
    await productDetailsPageobj.validateProductPage();

    // Step 4 : Validate Product Details
    await productDetailsPageobj.validateProductDetails(expectedTitle);

    // Step 5 : Return to Search Results
    await productDetailsPageobj.returnToSearchResults();

    // Validate Search Results Page
    await searchResultsPageobj.validateSearchResultsAfterBack(productName);

    });


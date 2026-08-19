const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');

let homePageobj, searchResultsPageobj, productDetailsPageobj;

test.describe('Scenario 1 - product searching and validation', () => {
    test('TC01 - Product search and product details validation', async ({ page }) => {

        homePageobj = new HomePage(page);
        searchResultsPageobj = new SearchResultsPage(page);

        const homepageTitle = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
        const productName = 'Laptop';
        const expectedTitle = 'Laptop';
        const productIndex = 0;

        await homePageobj.navigateToHomePage();
        await homePageobj.validateHomePage(homepageTitle);

        await homePageobj.searchProduct(productName);
        await searchResultsPageobj.validateSearchResults(productName);

        const productPage = await searchResultsPageobj.openProduct(productIndex);   // Open product based on index

        productDetailsPageobj = new ProductDetailsPage(productPage);

        await productDetailsPageobj.validateProductPage();
        await productDetailsPageobj.validateProductDetails(expectedTitle);
        await productDetailsPageobj.returnToSearchResults();

        await searchResultsPageobj.validateSearchResultsAfterBack(productName);

    });
});
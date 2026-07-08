const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const { WishlistPage } = require('../pages/wishlistPage.js');
const testData = require('../utils/testData.js');

let homePageobj, searchResultsPageobj, productDetailsPageobj, loginPageobj, productPage,wishlistPageobj;

test.describe.serial('Scenario 5 - Add Product to Wishlist and Remove It', () => {

test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);
    searchResultsPageobj = new SearchResultsPage(page);

    // Login
    await homePageobj.navigateToHomePage();
    await loginPageobj.login(testData.email, testData.password);
});

test('Test 1 - Add to Wishlist and Open Your Wishlist', async () => {
    // Step 1: Open a product details page
    await homePageobj.searchProduct(testData.productName);
    await searchResultsPageobj.validateSearchResults(testData.productName);
    productPage = await searchResultsPageobj.openProduct(testData.productIndex);
    productDetailsPageobj = new ProductDetailsPage(productPage);
    await productDetailsPageobj.validateProductTitleAndPrice();
    await productDetailsPageobj.validateAddToWishlistVisible();

    // Step 2: Add to Wish List
    await productDetailsPageobj.addToWishlist();
    await productDetailsPageobj.validateWishlistDialogOpened();
    await productDetailsPageobj.validateAddedToWishlist(testData.productName);

    // Step 3: Open Your Wish List
    wishlistPageobj = new WishlistPage(productPage);
    await wishlistPageobj.openWishlist(testData.productName);
});

test('Test 2 - Remove from Wishlist', async () => {
    // Step 4: Remove from Wish List
    await wishlistPageobj.removeProductFromWishlist(testData.productName);
    await wishlistPageobj.validateProductRemoved();
    await wishlistPageobj.refreshAndValidateWishlistEmpty();

});

test.afterAll(async () => {
    // Logout
    await loginPageobj.logout();
});

});
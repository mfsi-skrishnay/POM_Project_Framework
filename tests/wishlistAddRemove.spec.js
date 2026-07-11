const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const { WishlistPage } = require('../pages/wishlistPage.js');
const testData = require('../utils/testData.js');

let homePageobj, searchResultsPageobj, loginPageobj, wishlistPageobj;
let productDetailsPageobj1,productPage1,productPage2,productDetailsPageobj2, productPage3,productDetailsPageobj3;

test.describe.serial('Scenario 5 - Add Product to Wishlist and Remove It', () => {
    test.setTimeout(90000);
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
    const [product1, product2, product3] = testData.products;

    // Step 1: Search and open product 1 (Laptop), add to wishlist, close
    await homePageobj.searchProduct(product1.name);
    await searchResultsPageobj.validateSearchResults(product1.name);
    productPage1 = await searchResultsPageobj.openProduct(product1.index);
    productDetailsPageobj1 = new ProductDetailsPage(productPage1);
    await productDetailsPageobj1.validateProductTitleAndPrice();
    await productDetailsPageobj1.validateAddToWishlistVisible();
    await productDetailsPageobj1.addToWishlist();
    await productDetailsPageobj1.validateWishlistDialogOpened();
    await productDetailsPageobj1.validateAddedToWishlist(product1.name);
    await productDetailsPageobj1.closeAfterWishlistConfirmation();

    // Step 2: Search and open product 2 (Mobile), add to wishlist, close
    await homePageobj.searchProduct(product2.name);
    await searchResultsPageobj.validateSearchResults(product2.name);
    productPage2 = await searchResultsPageobj.openProduct(product2.index);
    productDetailsPageobj2 = new ProductDetailsPage(productPage2);
    await productDetailsPageobj2.validateProductTitleAndPrice();
    await productDetailsPageobj2.validateAddToWishlistVisible();
    await productDetailsPageobj2.addToWishlist();
    await productDetailsPageobj2.validateWishlistDialogOpened();
    await productDetailsPageobj2.validateAddedToWishlist(product2.name);
    await productDetailsPageobj2.closeAfterWishlistConfirmation();

    // Step 3: Search and open product 3 (TV), add to wishlist, KEEP OPEN
    await homePageobj.searchProduct(product3.name);
    await searchResultsPageobj.validateSearchResults(product3.name);
    productPage3 = await searchResultsPageobj.openProduct(product3.index);
    productDetailsPageobj3 = new ProductDetailsPage(productPage3);
    await productDetailsPageobj3.validateProductTitleAndPrice();
    await productDetailsPageobj3.validateAddToWishlistVisible();
    await productDetailsPageobj3.addToWishlist();
    await productDetailsPageobj3.validateWishlistDialogOpened();
    await productDetailsPageobj3.validateAddedToWishlist(product3.name);

    // Step 4: Open Your Wish List — from product 3 page
    wishlistPageobj = new WishlistPage(productPage3);
    await wishlistPageobj.openWishlist(testData.actualUrl);
    await wishlistPageobj.validateWishlistItemCount(testData.actualCount);

    wishlistPageobj = new WishlistPage(productPage3);
    await wishlistPageobj.openWishlist(testData.actualUrl);
    await wishlistPageobj.validateWishlistItemCount(testData.actualCount);

    // Visual validation additions
    await wishlistPageobj.captureWishlistScreenshot('wishlist-after-adding-3-items');
    await wishlistPageobj.captureFullWishlistScreenshot('wishlist-fullpage-after-adding-3-items');
    await wishlistPageobj.captureWishlistItemScreenshot(0, 'first-wishlist-item');

});

    test('Test 2- Searching in the wishlist',async()=>{
    const [product1] = testData.products;   // using "Laptop" as the search keyword

    // Step 5: Search within wishlist and validate results
    await wishlistPageobj.searchWithinWishlist(product1.name);
    await wishlistPageobj.validateSearchResultsKeyword(product1.name)
    await wishlistPageobj.clearSearchKeyword();
    })
 
    test('Test 3 - Removing 1 item from wishlist', async () => {
    const removeIndex = 0;   // removes the first item in the wishlist (e.g. Laptop)

    // Step 6: Remove the item based on index and validate
    await wishlistPageobj.removeProductFromWishlist(removeIndex);
    await wishlistPageobj.validateProductRemoved();
    });

    test('Test 4 - Changing Wishlist Name', async () => {
        
    // Step 7: Hover on wishlist menu, open Manage List
    await wishlistPageobj.wishlistMenuHover();
    await wishlistPageobj.clickOnManageList();

    // Step 8: Edit and save the new list name
    await wishlistPageobj.editListName(testData.newListName);
    await wishlistPageobj.validateListName(testData.newListName);
    
    });

    test.afterAll(async () => {
        await loginPageobj.logout();
    });

});
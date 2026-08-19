const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const { WishlistPage } = require('../pages/wishlistPage.js');
const { wishlistUrl } = require('../playwright.config.js');
const testData = require('../utils/testData.js');


const productName = 'Laptop';
const productIndexes = [0, 1];
const expectedWishlistItemCount = 2;
const newWishlistName = 'MyShoppingList';
const expectedBtnText = 'Add to Wish List';
const expectedName= 'Krishna' ;

let homePageobj, searchResultsPageobj, loginPageobj, wishlistPageobj;

test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePageobj = new HomePage(page);           //Avoid calling objects everyplace
    loginPageobj = new LoginPage(page);
    searchResultsPageobj = new SearchResultsPage(page);

    await homePageobj.navigateToHomePage();
    await loginPageobj.login(testData.email, testData.password);
    await loginPageobj.validateLoggedIn(expectedName);
    await addAllProducts();
});

// Adds each product to the wishlist, then opens the wishlist 
async function addAllProducts() {
    await homePageobj.searchProduct(productName);
    await searchResultsPageobj.validateSearchResults(productName);

    for (let i = 0; i < productIndexes.length; i++) {
        const productPage = await searchResultsPageobj.openProduct(productIndexes[i]);
        const productDetails = new ProductDetailsPage(productPage);

        await productDetails.validateProductPrice();
        await productDetails.addToWishlist(expectedBtnText);
        await productDetails.validateAddedToWishlistDialog();

        const isLastProduct = i === productIndexes.length - 1;

        if (!isLastProduct) {
            await productDetails.closeAfterWishlistConfirmation();
            await homePageobj.page.bringToFront();
        } else {
            wishlistPageobj = new WishlistPage(productPage);
            await wishlistPageobj.openWishlist(wishlistUrl);
            await wishlistPageobj.validateWishlistItemCount(expectedWishlistItemCount);
        }
    }
}

test.describe('Scenario 5 - Add Product to Wishlist and Remove It', () => {


test('TC01 - Remove a single item from the wishlist', async () => {
    const indexOfItemToRemove = 0;

    await wishlistPageobj.captureFullWishlistScreenshot('Wishlist full page after adding 3 items');

    await wishlistPageobj.removeProductFromWishlist(indexOfItemToRemove);
    await wishlistPageobj.validateProductMessage('Deleted');
});

test('TC02 - Rename the wishlist', async () => {
    await wishlistPageobj.captureWishlistItemScreenshot(0, 'First wishlist item');

    await wishlistPageobj.wishlistMenuHover();
    await wishlistPageobj.clickOnManageList();
    await wishlistPageobj.editListName(newWishlistName);
   // await wishlistPageobj.validateVisualSnapshot('wishlist-renamed');
    await wishlistPageobj.validateListName(newWishlistName);
});

test('TC03 - Search for an item within the wishlist', async () => {
    await wishlistPageobj.captureWishlistScreenshot('Wishlist after adding 3 items');

    await wishlistPageobj.searchWithinWishlist(productName);
    await wishlistPageobj.validateSearchResultsKeyword(productName);
    await wishlistPageobj.clearSearchKeyword();
});

});

test.afterAll(async () => {
 if (wishlistPageobj) {
        await wishlistPageobj.clearAllWishlistItems();
    }
 });
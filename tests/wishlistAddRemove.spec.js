const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const { WishlistPage } = require('../pages/wishlistPage.js');
const { wishlistUrl } = require('../playwright.config.js');
const testData = require('../utils/testData.js');


const products = [
    { name: 'Laptop', index: 0 },
    { name: 'Earbuds', index: 1 },
    { name: 'TV', index: 3 }
    ];
const expectedWishlistItemCount = 3;
const newWishlistName = 'MyShoppingList';
const expectedBtnText = 'Add to Wish List';
const expectedName= 'Krishna' ;

let homePageobj, searchResultsPageobj, loginPageobj, wishlistPageobj;

test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);
    searchResultsPageobj = new SearchResultsPage(page);

    await homePageobj.navigateToHomePage();
    await loginPageobj.login(testData.email, testData.password);
    await loginPageobj.validateLoggedIn(expectedName);
});

// Adds each product to the wishlist, then opens the wishlist 
async function addAllProducts() {
    const [firstProduct, secondProduct, thirdProduct] = products;   //destructuring

    // Add the first product 
    await homePageobj.searchProduct(firstProduct.name);
    await searchResultsPageobj.validateSearchResults(firstProduct.name);
    const firstProductPage = await searchResultsPageobj.openProduct(firstProduct.index);

    const firstProductDetails = new ProductDetailsPage(firstProductPage);
    await firstProductDetails.validateProductPrice();

    await firstProductDetails.addToWishlist(expectedBtnText);
    await firstProductDetails.validateAddedToWishlistDialog(firstProduct.name);
    await firstProductDetails.closeAfterWishlistConfirmation();


    // Add the second product 
    await homePageobj.searchProduct(secondProduct.name);
    await searchResultsPageobj.validateSearchResults(secondProduct.name);
    const secondProductPage = await searchResultsPageobj.openProduct(secondProduct.index);

    const secondProductDetails = new ProductDetailsPage(secondProductPage);
    await secondProductDetails.validateProductPrice();

    await secondProductDetails.addToWishlist(expectedBtnText);
    await secondProductDetails.validateAddedToWishlistDialog(secondProduct.name);
    await secondProductDetails.closeAfterWishlistConfirmation();

    // Add the third product open the wishlist
    await homePageobj.searchProduct(thirdProduct.name);
    await searchResultsPageobj.validateSearchResults(thirdProduct.name);
    const thirdProductPage = await searchResultsPageobj.openProduct(thirdProduct.index);

    const thirdProductDetails = new ProductDetailsPage(thirdProductPage);
    await thirdProductDetails.validateProductPrice();

    await thirdProductDetails.addToWishlist(expectedBtnText);
    await thirdProductDetails.validateAddedToWishlistDialog(thirdProduct.name);

    // Open the wishlist from the last page and validate count.
    wishlistPageobj = new WishlistPage(thirdProductPage);
    await wishlistPageobj.openWishlist(wishlistUrl);
    await wishlistPageobj.validateWishlistItemCount(expectedWishlistItemCount);
    
}

test.describe.configure('Scenario 5 - Add Product to Wishlist and Remove It', () => {

    test.beforeEach(async () => {
        await addAllProducts();
    });

    test.afterEach(async () => {
    if (wishlistPageobj) {
        await wishlistPageobj.clearAllWishlistItems();
    }
    });

    test('Test 1 - Search for an item within the wishlist', async () => {
    const [laptop] = products;

    await wishlistPageobj.captureWishlistScreenshot('Wishlist after adding 3 items');

    await wishlistPageobj.searchWithinWishlist(laptop.name);
    await wishlistPageobj.validateSearchResultsKeyword(laptop.name);
    await wishlistPageobj.clearSearchKeyword();
});

test('Test 2 - Remove a single item from the wishlist', async () => {
    const indexOfItemToRemove = 0;

    await wishlistPageobj.captureFullWishlistScreenshot('Wishlist full page after adding 3 items');

    await wishlistPageobj.removeProductFromWishlist(indexOfItemToRemove);
    await wishlistPageobj.validateProductMessage('Deleted');
});

test('Test 3 - Rename the wishlist', async () => {
    await wishlistPageobj.captureWishlistItemScreenshot(0, 'First wishlist item');

    await wishlistPageobj.wishlistMenuHover();
    await wishlistPageobj.clickOnManageList();
    await wishlistPageobj.editListName(newWishlistName);
   // await wishlistPageobj.validateVisualSnapshot('wishlist-renamed');
    await wishlistPageobj.validateListName(newWishlistName);
});
});

// test.afterAll(async () => {
//     await loginPageobj.logout();
// });
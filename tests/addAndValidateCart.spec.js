const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { CartPage } = require('../pages/CartPage.js');

let homePageobj, searchResultsPageobj, productDetailsPageobj, cartPageobj;

test('Scenario 3 - Add Product to Cart and Validate Cart', async ({ page }) => {
    homePageobj = new HomePage(page);
    searchResultsPageobj = new SearchResultsPage(page);
    

    const productName = 'Bluetooth Speaker';
    const productIndex = 2;
    const initialQuantity = 1;
    const updatedQuantity = 2;

    // Step 1: Search for Bluetooth Speaker
    await homePageobj.navigateToHomePage();
    await homePageobj.searchProduct(productName);
    await searchResultsPageobj.validateSearchResults(productName);

    // Step 2: Open the first available product
    const productPage = await searchResultsPageobj.openProduct(productIndex);
    productDetailsPageobj = new ProductDetailsPage(productPage);
    await productDetailsPageobj.validateProductTitleAndPrice();

    // Step 3: Add to Cart
    await productDetailsPageobj.addToCart();
    await productDetailsPageobj.validateAddToCartConfirmation();

    // Step 4: Open Cart
    cartPageobj = new CartPage(productPage);
    await productDetailsPageobj.goToCart();
    await cartPageobj.validateQuantity(initialQuantity);
    await cartPageobj.validateSubtotalVisible();

    // Step 5: Increase quantity to 2
    const initialSubtotal = await cartPageobj.getSubtotalValue();
    await cartPageobj.increaseQuantity(updatedQuantity);
    await cartPageobj.validateSubtotalUpdated(initialSubtotal);
});
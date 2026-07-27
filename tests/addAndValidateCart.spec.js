const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
const { CartPage } = require('../pages/CartPage.js');

let homePageobj, searchResultsPageobj, productDetailsPageobj, cartPageobj;

test('Scenario 3 - Add product to cart and validate cart', async ({ page }) => {
    homePageobj = new HomePage(page);
    searchResultsPageobj = new SearchResultsPage(page);
    
    const productName = 'Bluetooth Speaker';
    const productIndex = 3;
    const initialQuantity = 1;
    const updatedQuantity = 2;

    // Step 1: Search for bluetooth speaker
    await homePageobj.navigateToHomePage();
    await homePageobj.searchProduct(productName);
    await searchResultsPageobj.validateSearchResults(productName);

    // Step 2: Open the first available product
    const productPage = await searchResultsPageobj.openProduct(productIndex);
    productDetailsPageobj = new ProductDetailsPage(productPage);
    await productDetailsPageobj.validateProductPrice();

    // Step 3: Add to cart
    await productDetailsPageobj.addToCart();
    await productDetailsPageobj.validateAddToCartConfirmation();

    // Step 4: Open cart
    cartPageobj = new CartPage(productPage);
    await productDetailsPageobj.goToCart();
    await cartPageobj.validateQuantity(initialQuantity);
    await cartPageobj.validateSubtotalVisible();

    // Step 5: Increase quantity 
    const initialSubtotal = await cartPageobj.getSubtotalValue();
    await cartPageobj.increaseQuantity(updatedQuantity);
    await cartPageobj.validateSubtotalUpdated(initialSubtotal);
});
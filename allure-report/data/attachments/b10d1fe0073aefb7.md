# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: wishlistAddRemove.spec.js >> Scenario 5 - Add Product to Wishlist and Remove It >> Test 1 - Search for an item within the wishlist
- Location: tests\wishlistAddRemove.spec.js:95:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - link "Amazon .in" [ref=e6] [cursor=pointer]:
      - /url: /ref=ap_frn_logo
      - img "Amazon" [ref=e7]
      - text: .in
    - generic [ref=e12]:
      - heading "Sign in or create account" [level=1] [ref=e13]
      - paragraph [ref=e14]: Enter mobile number or email
      - generic [ref=e16]:
        - textbox "Enter mobile number or email" [active] [ref=e18]
        - generic [ref=e20] [cursor=pointer]:
          - button "Continue" [ref=e21]
          - generic [ref=e22]: Continue
      - paragraph [ref=e23]:
        - text: By continuing, you agree to Amazon's
        - link "Conditions of Use" [ref=e24] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940
        - text: and
        - link "Privacy Notice" [ref=e25] [cursor=pointer]:
          - /url: /gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380
        - text: .
      - generic [ref=e26]:
        - separator [ref=e27]
        - generic [ref=e28]: Buying for work?
        - link "Create a free business account" [ref=e29] [cursor=pointer]:
          - /url: /business/register/org/landing?ref_=ab_reg_signin_unifiedauth
  - generic [ref=e30]:
    - generic [ref=e33]:
      - link "Conditions of Use" [ref=e34] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940
      - link "Privacy Notice" [ref=e35] [cursor=pointer]:
        - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380
      - link "Help" [ref=e36] [cursor=pointer]:
        - /url: /help
    - generic [ref=e37]: © 1996–2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1   | const { test } = require('@playwright/test');
  2   | const { HomePage } = require('../pages/HomePage.js');
  3   | const { SearchResultsPage } = require('../pages/SearchResultsPage.js');
  4   | const { ProductDetailsPage } = require('../pages/ProductDetailsPage.js');
  5   | const { LoginPage } = require('../pages/LoginPage.js');
  6   | const { WishlistPage } = require('../pages/wishlistPage.js');
  7   | const { wishlistUrl } = require('../playwright.config.js');
  8   | const testData = require('../utils/testData.js');
  9   | 
  10  | 
  11  | const products = [
  12  |     { name: 'Laptop', index: 0 },
  13  |     { name: 'Earbuds', index: 1 },
  14  |     { name: 'TV', index: 3 }
  15  |     ];
  16  | const expectedWishlistItemCount = 3;
  17  | const newWishlistName = 'MyShoppingList';
  18  | const expectedBtnText = 'Add to Wish List';
  19  | const expectedName= 'Krishna' ;
  20  | 
  21  | let homePageobj, searchResultsPageobj, loginPageobj, wishlistPageobj;
  22  | 
  23  | test.beforeAll(async ({ browser }) => {
  24  |     const page = await browser.newPage();
  25  |     homePageobj = new HomePage(page);
  26  |     loginPageobj = new LoginPage(page);
  27  |     searchResultsPageobj = new SearchResultsPage(page);
  28  | 
  29  |     await homePageobj.navigateToHomePage();
  30  |     await loginPageobj.login(testData.email, testData.password);
  31  |     await loginPageobj.validateLoggedIn(expectedName);
  32  | });
  33  | 
  34  | // Adds each product to the wishlist, then opens the wishlist 
  35  | async function addAllProducts() {
  36  |     const [firstProduct, secondProduct, thirdProduct] = products;   //destructuring
  37  | 
  38  |     // Add the first product 
  39  |     await homePageobj.searchProduct(firstProduct.name);
  40  |     await searchResultsPageobj.validateSearchResults(firstProduct.name);
  41  |     const firstProductPage = await searchResultsPageobj.openProduct(firstProduct.index);
  42  | 
  43  |     const firstProductDetails = new ProductDetailsPage(firstProductPage);
  44  |     await firstProductDetails.validateProductTitleAndPrice();
  45  |     await firstProductDetails.validateAddToWishlistVisible();
  46  | 
  47  |     await firstProductDetails.addToWishlist(expectedBtnText);
  48  |     await firstProductDetails.validateAddedToWishlistDialog(firstProduct.name);
  49  |     await firstProductDetails.closeAfterWishlistConfirmation();
  50  | 
  51  |     // Add the second product 
  52  |     await homePageobj.searchProduct(secondProduct.name);
  53  |     await searchResultsPageobj.validateSearchResults(secondProduct.name);
  54  |     const secondProductPage = await searchResultsPageobj.openProduct(secondProduct.index);
  55  | 
  56  |     const secondProductDetails = new ProductDetailsPage(secondProductPage);
  57  |     await secondProductDetails.validateProductTitleAndPrice();
  58  |     await secondProductDetails.validateAddToWishlistVisible();
  59  | 
  60  |     await secondProductDetails.addToWishlist(expectedBtnText);
  61  |     await secondProductDetails.validateAddedToWishlistDialog(secondProduct.name);
  62  |     await secondProductDetails.closeAfterWishlistConfirmation();
  63  | 
  64  |     // Add the third product open the wishlist
  65  |     await homePageobj.searchProduct(thirdProduct.name);
  66  |     await searchResultsPageobj.validateSearchResults(thirdProduct.name);
  67  |     const thirdProductPage = await searchResultsPageobj.openProduct(thirdProduct.index);
  68  | 
  69  |     const thirdProductDetails = new ProductDetailsPage(thirdProductPage);
  70  |     await thirdProductDetails.validateProductTitleAndPrice();
  71  |     await thirdProductDetails.validateAddToWishlistVisible();
  72  | 
  73  |     await thirdProductDetails.addToWishlist(expectedBtnText);
  74  |     await thirdProductDetails.validateAddedToWishlistDialog(thirdProduct.name);
  75  | 
  76  |     // Open the wishlist from the last page and validate count.
  77  |     wishlistPageobj = new WishlistPage(thirdProductPage);
  78  |     await wishlistPageobj.openWishlist(wishlistUrl);
  79  |     await wishlistPageobj.validateWishlistItemCount(expectedWishlistItemCount);
  80  |     
  81  | }
  82  | 
  83  | test.describe('Scenario 5 - Add Product to Wishlist and Remove It', () => {
  84  | 
> 85  |     test.beforeEach(async () => {
      |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  86  |         await addAllProducts();
  87  |     });
  88  | 
  89  |     test.afterEach(async () => {
  90  |     if (wishlistPageobj) {
  91  |         await wishlistPageobj.clearAllWishlistItems();
  92  |     }
  93  |     });
  94  | 
  95  |     test('Test 1 - Search for an item within the wishlist', async () => {
  96  |     const [laptop] = products;
  97  | 
  98  |     await wishlistPageobj.captureWishlistScreenshot('Wishlist after adding 3 items');
  99  | 
  100 |     await wishlistPageobj.searchWithinWishlist(laptop.name);
  101 |     await wishlistPageobj.validateSearchResultsKeyword(laptop.name);
  102 |     await wishlistPageobj.clearSearchKeyword();
  103 | });
  104 | 
  105 | test('Test 2 - Remove a single item from the wishlist', async () => {
  106 |     const indexOfItemToRemove = 0;
  107 | 
  108 |     await wishlistPageobj.captureFullWishlistScreenshot('Wishlist full page after adding 3 items');
  109 | 
  110 |     await wishlistPageobj.removeProductFromWishlist(indexOfItemToRemove);
  111 |     await wishlistPageobj.validateProductMessage('Deleted');
  112 | });
  113 | 
  114 | test('Test 3 - Rename the wishlist', async () => {
  115 |     await wishlistPageobj.captureWishlistItemScreenshot(0, 'First wishlist item');
  116 | 
  117 | 
  118 |     await wishlistPageobj.wishlistMenuHover();
  119 |     await wishlistPageobj.clickOnManageList();
  120 |     await wishlistPageobj.editListName(newWishlistName);
  121 |    // await wishlistPageobj.validateVisualSnapshot('wishlist-renamed');
  122 |     await wishlistPageobj.validateListName(newWishlistName);
  123 | });
  124 | });
  125 | 
  126 | test.afterAll(async () => {
  127 |     await loginPageobj.logout();
  128 | });
```
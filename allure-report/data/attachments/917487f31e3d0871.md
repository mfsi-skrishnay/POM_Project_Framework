# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: wishlistAddRemove.spec.js >> Scenario 5 - Add Product to Wishlist and Remove It >> Test 3 - Rename the wishlist
- Location: tests\wishlistAddRemove.spec.js:114:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('a[id*="itemName_"]')
Expected: 3
Received: 4
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('a[id*="itemName_"]')
    4 × locator resolved to 0 elements
      - unexpected value "0"
    6 × locator resolved to 4 elements
      - unexpected value "4"
    - locator resolved to 0 elements
    - unexpected value "0"
    2 × locator resolved to 4 elements
      - unexpected value "4"

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
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | const locators = {
  4   |     wishlistNavLink: '[id*="your-list"] a',
  5   |     wishlistItemTitle: 'a[id*="itemName_"]',
  6   |     removeItemButton: '[name="submit.deleteItem"]', 
  7   |     deletedAlert: '.a-alert-content',
  8   |     emptyWishlistMessage: 'div[class*="zero-items-text-section"] span',
  9   |     wishlistSearchBox: '#itemSearchTextInput',
  10  |     wishlistMenu:'div[id*="menu-popover-trigger"] [aria-label="More Options"]',
  11  |     managelist:'#editYourList',
  12  |     listname:'input[id="list-settings-name"]',
  13  |     listSettingSave:'[aria-labelledby*="list-settings-save"]',
  14  |     profileListName:'[id="profile-list-name"]',
  15  | 
  16  | };
  17  | 
  18  | class WishlistPage {
  19  |     constructor(page) {
  20  |         this.page = page;
  21  |     }
  22  | 
  23  |     async openWishlist(expectedUrl) {
  24  |         await this.page.locator(locators.wishlistNavLink).click();
  25  |         await expect(this.page).toHaveURL(new RegExp(expectedUrl));
  26  |     }
  27  | 
  28  |     
  29  |     async validateWishlistItemCount(expectedCount) {
> 30  |     await expect(this.page.locator(locators.wishlistItemTitle)).toHaveCount(expectedCount);
      |                                                                 ^ Error: expect(locator).toHaveCount(expected) failed
  31  |     }
  32  | 
  33  |     async searchWithinWishlist(keyword) {
  34  |     const searchBox = this.page.locator(locators.wishlistSearchBox);
  35  |     await searchBox.fill(keyword);
  36  |     await searchBox.press('Enter');
  37  |     }
  38  | 
  39  |     async validateSearchResultsKeyword(keyword) {
  40  |     await expect(this.page.locator(locators.wishlistItemTitle)).toBeVisible();
  41  |     await expect(this.page.locator(locators.wishlistItemTitle)).toContainText(keyword, { ignoreCase: true });
  42  |     }
  43  | 
  44  |     async clearSearchKeyword(){
  45  |     const searchBox = this.page.locator(locators.wishlistSearchBox);
  46  |     await searchBox.fill('');
  47  |     await searchBox.press('Enter');
  48  |     
  49  |     }
  50  | 
  51  |     async removeProductFromWishlist(index) {
  52  |     const wishlistItem = this.page.locator(locators.wishlistItemTitle).nth(index);
  53  |     await expect(wishlistItem).toBeVisible();
  54  |     await this.page.locator(locators.removeItemButton).nth(index).click();
  55  |     }
  56  | 
  57  |     async validateProductMessage(expectedMessage) {
  58  |     const alertMessage = this.page.locator(locators.deletedAlert, {hasText: expectedMessage});
  59  |     await expect(alertMessage).toBeVisible();
  60  |     }
  61  | 
  62  |     async refreshAndValidateWishlistEmpty() {
  63  |         await this.page.reload();
  64  |         await expect(this.page.locator(locators.emptyWishlistMessage)).toContainText('There are no items in this List.');
  65  |         await this.page.close();
  66  |     }
  67  |     
  68  |     async wishlistMenuHover(){
  69  |         await this.page.locator(locators.wishlistMenu).click();  
  70  |         
  71  |     }
  72  | 
  73  |     async clickOnManageList(){
  74  |         await this.page.locator(locators.managelist).click();
  75  |     }
  76  | 
  77  |     async editListName(updateListname){
  78  |         const listName=this.page.locator(locators.listname)
  79  |         await listName.click();
  80  |         await listName.fill(updateListname);
  81  |         await this.page.locator(locators.listSettingSave).click();
  82  |     }
  83  | 
  84  |     async validateListName(expectedName) {
  85  |     try{
  86  |     await expect(this.page.locator(locators.profileListName)).toBeVisible();
  87  |     await expect(this.page.locator(locators.profileListName)).toContainText(expectedName);
  88  |     
  89  |     }
  90  |     catch (error) {
  91  |     await this.page.screenshot({ path: `screenshots/failure-validateListName-${Date.now()}.png` });
  92  |     throw error;
  93  |     }
  94  |     }
  95  | 
  96  |     async captureWishlistScreenshot(fileName) {
  97  |     await this.page.screenshot({ path: `screenshots/${fileName}.png` });
  98  |     }
  99  | 
  100 |     async captureFullWishlistScreenshot(fileName) {
  101 |     await this.page.screenshot({ path: `screenshots/${fileName}.png`, fullPage: true });
  102 |     }
  103 | 
  104 |     async captureWishlistItemScreenshot(index, fileName) {
  105 |     await this.page.locator(locators.wishlistItemTitle).nth(index).screenshot({ path: `screenshots/${fileName}.png` });
  106 |     }
  107 | 
  108 |     async validateVisualSnapshot(name) {
  109 |     await expect(this.page).toHaveScreenshot(`${name}.png`,{fullPage: true});
  110 |     }
  111 | 
  112 |     async clearAllWishlistItems() {
  113 |     const searchBox = this.page.locator(locators.wishlistSearchBox);
  114 |     await searchBox.fill('');
  115 |     await searchBox.press('Enter');
  116 |     await this.page.waitForLoadState('domcontentloaded');
  117 | 
  118 |     let remainingItemCount = await this.page.locator(locators.wishlistItemTitle).count();
  119 |     while (remainingItemCount > 0) {
  120 |         await this.removeProductFromWishlist(0);
  121 |         await expect(this.page.locator(locators.deletedAlert, { hasText: 'Deleted' })).toBeVisible();
  122 |         await this.page.reload();
  123 |         await this.page.waitForLoadState('domcontentloaded');
  124 |         remainingItemCount = await this.page.locator(locators.wishlistItemTitle).count();
  125 |     }
  126 |     await this.page.locator(locators.emptyWishlistMessage).waitFor({ state: 'visible' });
  127 |     await expect(this.page.locator(locators.emptyWishlistMessage)).toContainText('There are no items in this List.');
  128 |     await this.page.close();
  129 |     }
  130 | }
```
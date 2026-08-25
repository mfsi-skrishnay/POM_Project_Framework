const { expect } = require('@playwright/test');
const { ProductDetailsPage } = require('./ProductDetailsPage.js');

const locators = {
    navigation: {
        wishlistNavLink: '[id*="your-list"] a',
    },

    items: {
        wishlistItemTitle: 'a[id*="itemName_"]',
        removeItemButton: '[name="submit.deleteItem"]',
        deletedAlert: '.a-alert-content',
        emptyWishlistMessage: 'div[class*="zero-items-text-section"] span',
    },

    search: {
        wishlistSearchBox: '#itemSearchTextInput',
    },

    listSettings: {
        wishlistMenu: 'div[id*="menu-popover-trigger"] [aria-label="More Options"]',
        managelist: '#editYourList',
        listname: 'input[id="list-settings-name"]',
        listSettingSave: '[aria-labelledby*="list-settings-save"]',
        profileListName: '[id="profile-list-name"]',
    },
};

class WishlistPage {
    constructor(page) {
        this.page = page;
    }

    async openWishlist(expectedUrl) {
        await this.page.locator(locators.navigation.wishlistNavLink).click();
        await expect(this.page).toHaveURL(new RegExp(expectedUrl));
    }

    async validateWishlistItemCount(expectedCount) {
    await expect(this.page.locator(locators.items.wishlistItemTitle)).toHaveCount(expectedCount);
    }

    async searchWithinWishlist(keyword) {
    const searchBox = this.page.locator(locators.search.wishlistSearchBox);
    await searchBox.fill(keyword);
    await searchBox.press('Enter');
    }

    async validateSearchResultsKeyword(keyword) {
    const items = this.page.locator(locators.items.wishlistItemTitle);
    await expect(items.first()).toBeVisible();
    await expect(items.first()).toContainText(keyword, { ignoreCase: true });
    }

    async clearSearchKeyword(){
    const searchBox = this.page.locator(locators.search.wishlistSearchBox);
    await searchBox.fill('');
    await searchBox.press('Enter');
    
    }

    async removeProductFromWishlist(index) {
    const wishlistItem = this.page.locator(locators.items.wishlistItemTitle).nth(index);
    await expect(wishlistItem).toBeVisible();
    await this.page.locator(locators.items.removeItemButton).nth(index).click();
    }

    async validateProductMessage(expectedMessage) {
    const alertMessage = this.page.locator(locators.items.deletedAlert, {hasText: expectedMessage});
    await expect(alertMessage).toBeVisible();
    }

    async refreshAndValidateWishlistEmpty() {
        await this.page.reload();
        await expect(this.page.locator(locators.items.emptyWishlistMessage)).toContainText('There are no items in this List.');
        await this.page.close();
    }
    
    async wishlistMenuHover(){
        await this.page.locator(locators.listSettings.wishlistMenu).click();  
        
    }

    async clickOnManageList(){
        await this.page.locator(locators.listSettings.managelist).click();
    }

    async editListName(updateListname){
        const listName=this.page.locator(locators.listSettings.listname)
        await listName.click();
        await listName.fill(updateListname);
        await this.page.locator(locators.listSettings.listSettingSave).click();
    }

    async validateListName(expectedName) {
    try{
    await expect(this.page.locator(locators.listSettings.profileListName)).toBeVisible();
    await expect(this.page.locator(locators.listSettings.profileListName)).toContainText(expectedName);
    }
    catch (error) {
    await this.page.screenshot({ path: `screenshots/failure-validateListName-${Date.now()}.png` });
    throw error;
    }
    }

    async captureWishlistScreenshot(fileName) {
    await this.page.screenshot({ path: `screenshots/${fileName}.png` });
    }

    async captureFullWishlistScreenshot(fileName) {
    await this.page.screenshot({ path: `screenshots/${fileName}.png`, fullPage: true });
    }

    async captureWishlistItemScreenshot(index, fileName) {
    await this.page.locator(locators.items.wishlistItemTitle).nth(index).screenshot({ path: `screenshots/${fileName}.png` });
    }

    async validateVisualSnapshot(name) {
    await expect(this.page).toHaveScreenshot(`${name}.png`,{fullPage: true});
    }

    async clearAllWishlistItems() {
    const searchBox = this.page.locator(locators.search.wishlistSearchBox);
    await searchBox.fill('');
    await searchBox.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');

    let remainingItemCount = await this.page.locator(locators.items.wishlistItemTitle).count();
    while (remainingItemCount > 0) {
        await this.removeProductFromWishlist(0);
        await expect(this.page.locator(locators.items.deletedAlert, { hasText: 'Deleted' })).toBeVisible();
        await this.page.reload();
        await this.page.waitForLoadState('domcontentloaded');
        remainingItemCount = await this.page.locator(locators.items.wishlistItemTitle).count();
    }
    await this.page.locator(locators.items.emptyWishlistMessage).waitFor({ state: 'visible' });
    await expect(this.page.locator(locators.items.emptyWishlistMessage)).toContainText('There are no items in this List.');
    await this.page.close();
    }

    static async addProductsAndOpenWishlist({
        homePageobj,searchResultsPageobj,productName,productIndexes,expectedBtnText,wishlistUrl,expectedWishlistItemCount
    }) {
        await homePageobj.searchProduct(productName);
        await searchResultsPageobj.validateSearchResults(productName);
        let wishlistPageobj;

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

        return wishlistPageobj;
    }


}
module.exports = { WishlistPage };
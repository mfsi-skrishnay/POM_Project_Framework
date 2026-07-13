const { expect } = require('@playwright/test');

const locators = {
    wishlistNavLink: '[id*="your-list"] a',
    wishlistItemTitle: 'a[id*="itemName_"]',
    removeItemButton: '[name="submit.deleteItem"]', //[data-reg-item-delete*='Laptop'] [name="submit.deleteItem"]
    deletedAlert: '.a-alert-content',
    emptyWishlistMessage: 'div[class*="zero-items-text-section"] span',
    wishlistSearchBox: '#itemSearchTextInput',
    wishlistMenu:'div[id*="menu-popover-trigger"] [aria-label="More Options"]',
    managelist:'#editYourList',
    listname:'input[id="list-settings-name"]',
    listSettingSave:'[aria-labelledby*="list-settings-save"]',
    profileListName:'[id="profile-list-name"]',

};

class WishlistPage {
    constructor(page) {
        this.page = page;
    }

    async openWishlist(expectedUrl) {
        await this.page.locator(locators.wishlistNavLink).click();
        const currentUrl = this.page.url();
        await expect(currentUrl).toContain(expectedUrl)
    }

    
    async validateWishlistItemCount(expectedCount) {
    await expect(this.page.locator(locators.wishlistItemTitle)).toHaveCount(expectedCount);
    }

    async searchWithinWishlist(keyword) {
    const searchBox = this.page.locator(locators.wishlistSearchBox);
    await searchBox.fill(keyword);
    await searchBox.press('Enter');
    }

    async validateSearchResultsKeyword(keyword) {
    await expect(this.page.locator(locators.wishlistItemTitle)).toBeVisible();
    await expect(this.page.locator(locators.wishlistItemTitle)).toContainText(keyword, { ignoreCase: true });
    }

    async clearSearchKeyword(){
    const searchBox = this.page.locator(locators.wishlistSearchBox);
    await searchBox.fill('');
    await searchBox.press('Enter');
    }

    async removeProductFromWishlist(index) {
    const wishlistItem = this.page.locator(locators.wishlistItemTitle).nth(index);
    await expect(wishlistItem).toBeVisible();
    await this.page.locator(locators.removeItemButton).nth(index).click();
    }

    async validateProductMessage(expectedMessage) {
    const alertMessage = this.page.locator(locators.deletedAlert, {hasText: expectedMessage});
    await expect(alertMessage).toBeVisible();
    }

    async refreshAndValidateWishlistEmpty() {
        await this.page.reload();
        await expect(this.page.locator(locators.emptyWishlistMessage)).toBeVisible();
        await this.page.close();
    }
    
    async wishlistMenuHover(){
        await this.page.locator(locators.wishlistMenu).click();  
        
    }

    async clickOnManageList(){
        await this.page.locator(locators.managelist).click();
    }

    async editListName(updateListname){
        const listName=this.page.locator(locators.listname)
        await listName.click();
        await listName.fill(updateListname);
        await this.page.locator(locators.listSettingSave).click();
    }

    async validateListName(expectedName) {
    try{
    await expect(this.page.locator(locators.profileListName)).toBeVisible();
    await expect(this.page.locator(locators.profileListName)).toContainText(expectedName);
    
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
    await this.page.locator(locators.wishlistItemTitle).nth(index).screenshot({ path: `screenshots/${fileName}.png` });
    }

    async clearAllWishlistItems() {
    let remainingItemCount = await this.page.locator(locators.wishlistItemTitle).count();
    while (remainingItemCount > 0) {
        await this.removeProductFromWishlist(0);
        await expect(this.page.locator(locators.deletedAlert, { hasText: 'Deleted' }).last()).toBeVisible();
        await this.page.reload();
        remainingItemCount = await this.page.locator(locators.wishlistItemTitle).count();
        
    }
    await this.page.close();
}
}
module.exports = { WishlistPage };
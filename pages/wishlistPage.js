const { expect } = require('@playwright/test');

const locators = {
    wishlistNavLink: '[id*="your-list"] a',
    wishlistItemTitle: 'a[id*="itemName_"]',
    removeItemButton: '[name="submit.deleteItem"]', 
    deletedAlert: '.a-alert-content',
    emptyWishlistMessage: 'div[class*="zero-items-text-section"] span'
};

class WishlistPage {
    constructor(page) {
        this.page = page;
    }

    async openWishlist(expectedTitle) {
        await this.page.locator(locators.wishlistNavLink).click();
        const wishlistItem = this.page.locator(locators.wishlistItemTitle).filter({ hasText: expectedTitle });
        await expect(wishlistItem).toBeVisible();
    }

    async removeProductFromWishlist(expectedTitle) {
        const wishlistItem = this.page.locator(locators.wishlistItemTitle).filter({ hasText: expectedTitle });
        await expect(wishlistItem).toBeVisible();
        await this.page.locator(locators.removeItemButton).click();
    }

     async validateProductRemoved() {
        const deletedAlert = this.page.locator(locators.deletedAlert,{ hasText: 'Deleted' });
        await expect(deletedAlert).toBeVisible();
    }

    async refreshAndValidateWishlistEmpty() {
        await this.page.reload();
        await expect(this.page.locator(locators.emptyWishlistMessage)).toBeVisible();
        await this.page.close();
    }
    
}
module.exports = { WishlistPage };
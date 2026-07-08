const { expect } = require('@playwright/test');

const locators = {
    quantityValue: 'span[data-a-selector="inner-value"]',
    quantityIncreaseBtn: 'button[aria-label*="Increase quantity"]',
    subtotal: "#sc-subtotal-amount-activecart span",
    
};

class CartPage {
    constructor(page) {
        this.page = page;
    }

    async validateQuantity(expectedQty) {
        await expect(this.page.locator(locators.quantityValue).first()).toContainText(String(expectedQty)); 
    }

    async validateSubtotalVisible() {
        const count = await this.page.locator(locators.subtotal).count();
        console.log('Matches found:', count);
        await expect(this.page.locator(locators.subtotal).first()).toBeVisible();
    }

    async increaseQuantity(targetQty) {
        await this.page.locator(locators.quantityIncreaseBtn).first().click();
        await this.validateQuantity(targetQty); 
    }    

    async getSubtotalValue() {
        const text = await this.page.locator(locators.subtotal).first().textContent();
        return Number(text.replace(/[^0-9.]/g, ''));
    }
   
    async validateSubtotalUpdated(previousSubtotal) {
        const newSubtotal = await this.getSubtotalValue();
        expect(newSubtotal).toBeGreaterThan(previousSubtotal); 
    }
}
module.exports = { CartPage };
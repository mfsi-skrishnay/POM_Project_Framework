const { expect } = require('@playwright/test');

const locators = {
    productTitle: '#productTitle',
    productPrice: 'span[class*="priceToPay"]',
    productRating: 'span[id*=CustomerReview]',
    availability: '#availability',
    deliveryInfo: '#deliveryBlockMessage'
};

class ProductDetailsPage {
    constructor(page) {
        this.page = page;
    }

    async validateProductPage() {
        await expect(this.page.locator(locators.productTitle).first()).toBeVisible();  // Verify Product Title
        await expect(this.page.locator(locators.productPrice).first()).toBeVisible();  // Verify Product Price
        await expect(this.page.locator(locators.productRating).nth(0)).toBeVisible(); // Verify Product Rating
        await expect(this.page.locator(locators.availability)).toBeVisible();  // Verify Availability
        await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();  // Verify Delivery Information
    }

    async validateProductDetails(expectedTitle) {
        await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
        
        const productPrice = await this.page.locator(locators.productPrice).first().textContent();
        
        await expect(productPrice).not.toBe('');

       // Verify product review count is displayed
        await expect(this.page.locator(locators.productRating).nth(0)).toHaveAttribute('aria-label', /Reviews/);
        await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();
    }

    async returnToSearchResults() {
        await this.page.close();
    }

}
module.exports = { ProductDetailsPage };
const { expect } = require('@playwright/test');

const locators = {
    productTitle: '#productTitle',
    productPrice: 'span[class*="priceToPay"]',
    productRating: 'span[id*=CustomerReview]',
    availability: '#availability',
    deliveryInfo: '#deliveryBlockMessage',

    addToCartButton: 'input[id*="add-to-cart"]',
    goToCartButton: "//a[normalize-space()='Go to Cart']",
    goToCartLink: "//a[normalize-space()='Go to Cart']",
    addedItemPrice: "span[class*='subtotal'] h2",

};

class ProductDetailsPage {
    constructor(page) {
        this.page = page;
    }

    async validateProductPage() {
        await expect(this.page.locator(locators.productTitle).first()).toBeVisible();  
        await expect(this.page.locator(locators.productPrice).first()).toBeVisible();  
        await expect(this.page.locator(locators.productRating).nth(0)).toBeVisible(); 
        await expect(this.page.locator(locators.availability)).toBeVisible();  
        await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();  
    }

    async validateProductDetails(expectedTitle) {
        await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
        const productPrice = await this.page.locator(locators.productPrice).first().textContent();
        expect(productPrice).not.toBe('');
        await expect(this.page.locator(locators.productRating).nth(0)).toHaveAttribute('aria-label', /Reviews/);
        await expect(this.page.locator(locators.deliveryInfo)).toBeVisible();
    }

    async returnToSearchResults() {
        await this.page.close();
    }

    async validateProductTitleAndPrice() {
        const productTitle = await this.page.locator(locators.productTitle).first().textContent();
        const productPrice = await this.page.locator(locators.productPrice).first().textContent();
    }

    async addToCart() {
        await this.page.locator(locators.addToCartButton).click();
    }

    async validateAddToCartConfirmation() {
        await expect(this.page.locator(locators.goToCartButton).first()).toBeVisible();  
        await expect(this.page.locator(locators.addedItemPrice).first()).toBeVisible();   
    }

    async goToCart() {
        await this.page.locator(locators.goToCartLink).first().click();
    }



}
module.exports = { ProductDetailsPage };
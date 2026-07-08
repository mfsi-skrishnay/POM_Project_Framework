const { expect } = require('@playwright/test');

const locators = {
    productTitle: '#productTitle',
    productPrice: 'span[class*="priceToPay"]',
    productRating: 'span[id*=CustomerReview]',
    availability: '#availability',
    deliveryInfo: '#deliveryBlockMessage',

    addToCartButton: 'input[id*="add-to-cart"]',
    goToCartButton: "//a[normalize-space()='Go to Cart']",
    addedItemPrice: "span[class*='subtotal'] h2",

    addToWishlistButton: "#wishListMainButton",
    wishlistdialog: 'div[aria-label="Add to Wish List"]',
    wishlistConfirmation: 'div[aria-label="Add to Wish List"] h4',

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
        await this.page.locator(locators.goToCartButton).first().click();
    }

    async validateAddToWishlistVisible() {
        await expect(this.page.locator(locators.addToWishlistButton)).toBeVisible();
    }

    async addToWishlist(){
        await this.page.locator(locators.addToWishlistButton).click();
    }

    async validateWishlistDialogOpened() {
        await expect(this.page.locator(locators.wishlistdialog)).toBeVisible();
    }

    async validateAddedToWishlist(expectedTitle) {
    await expect(this.page.locator(locators.wishlistConfirmation)).toBeVisible();
    await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
    }


}
module.exports = { ProductDetailsPage };
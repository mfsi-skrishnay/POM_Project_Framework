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
    addToWishlistButtonInput: 'input[id*="button-submit"]', 
    wishlistdialog: 'div[aria-label="Add to Wish List"]',
    wishlistConfirmation: 'div[aria-label="Add to Wish List"] h4',

};

class ProductDetailsPage {
    constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
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

    async validateProductPrice() {
        await expect(this.page.locator(locators.productPrice).first()).toBeVisible();
    }

    async addToCart() {
        await this.page.locator(locators.addToCartButton).click();
    }

    async validateAddToCartConfirmation() {
        await expect(this.page.locator(locators.goToCartButton).first()).toBeVisible();  
    }

    async goToCart() {
        await this.page.locator(locators.goToCartButton).first().click();
    }

   async addToWishlist(expectedButtonText) {
  //  await expect(this.page.locator(locators.addToWishlistButton)).toBeVisible();
    const wishlistButtonInput = this.page.locator(locators.addToWishlistButtonInput);
    await expect(wishlistButtonInput).toHaveValue(expectedButtonText);
    await this.page.locator(locators.addToWishlistButton).click();
}

    async validateAddedToWishlistDialog(expectedTitle) {
    await expect(this.page.locator(locators.wishlistConfirmation)).toBeVisible();
    //await expect(this.page.locator(locators.productTitle).first()).toContainText(expectedTitle);
    }

    async closeAfterWishlistConfirmation() {
        await this.page.close();
    }

}
module.exports = { ProductDetailsPage };
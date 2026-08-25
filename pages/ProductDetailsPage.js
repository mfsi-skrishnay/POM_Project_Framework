const { expect } = require('@playwright/test');

const locators = {
    desktop: {
        productTitle: '#productTitle',
        productPrice: 'span[class*="priceToPay"]',
        productRating: 'span[id*=CustomerReview]',
        deliveryInfo: '#deliveryBlockMessage',
    },

    mobile: {
        MproductTitle: '#title',
        MproductPrice: 'span[class*="priceToPay"]',
        MproductRating: '#acrCustomerReviewLink',
        MdeliveryInfo: '#deliveryBlockMessage',
    },

    cart: {
        addToCartButton: 'input[id*="add-to-cart"]',
        goToCartButton: "//a[normalize-space()='Go to Cart']",
        addedItemPrice: "span[class*='subtotal'] h2",
    },

    wishlist: {
        addToWishlistButton: "#wishListMainButton",
        addToWishlistButtonInput: 'input[id*="button-submit"]',
        wishlistdialog: 'div[aria-label="Add to Wish List"]',
        wishlistConfirmation: '#wishlistButtonStack',
    },
};

class ProductDetailsPage {
    constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    }

   async validateProductPage() {
    if (this.isMobile) {
        await expect(this.page.locator(locators.mobile.MproductTitle).first()).toBeVisible();
        await expect(this.page.locator(locators.mobile.MproductPrice).first()).toBeVisible();
        await expect(this.page.locator(locators.mobile.MproductRating).nth(0)).toBeVisible();
        await expect(this.page.locator(locators.mobile.MdeliveryInfo)).toBeVisible();
    } else {
        await expect(this.page.locator(locators.desktop.productTitle).first()).toBeVisible();
        await expect(this.page.locator(locators.desktop.productPrice).first()).toBeVisible();
        await expect(this.page.locator(locators.desktop.productRating).nth(0)).toBeVisible();
        await expect(this.page.locator(locators.desktop.deliveryInfo)).toBeVisible();
    }
    }

    async validateProductDetails(expectedTitle) {

    if (this.isMobile) {
        await expect(this.page.locator(locators.mobile.MproductTitle).first()).toContainText(expectedTitle);

        const productPrice = await this.page.locator(locators.mobile.MproductPrice).first().textContent();
        expect(productPrice).not.toBe('');

        await expect(this.page.locator(locators.mobile.MdeliveryInfo)).toBeVisible();

    } else {
        await expect(this.page.locator(locators.desktop.productTitle).first()).toContainText(expectedTitle);

        const productPrice = await this.page.locator(locators.desktop.productPrice).first().textContent();
        expect(productPrice).not.toBe('');

        await expect(this.page.locator(locators.desktop.productRating).nth(0)).toHaveAttribute('aria-label', /Reviews/);
        await expect(this.page.locator(locators.desktop.deliveryInfo)).toBeVisible();
    }
    }

    async returnToSearchResults() {
        await this.page.close();
    }

    async validateProductPrice() {
        // Some product pages render price in different elements; check common alternatives
        const priceLocator = this.page.locator('span[class*="priceToPay"], span.a-offscreen, span.a-price-whole');
        const elem = priceLocator.first();
        const priceText = await elem.textContent();
        expect(priceText && priceText.trim().length > 0);
    }

    async addToCart() {
        await this.page.locator(locators.cart.addToCartButton).click();
    }

    async getProductTitle() {
        const title = await this.page.locator(locators.desktop.productTitle).first().textContent();
        return title.trim();
    }
    
    async validateAddToCartConfirmation() {
        await expect(this.page.locator(locators.cart.goToCartButton).first()).toBeVisible();  
    }

    async goToCart() {
        await this.page.locator(locators.cart.goToCartButton).first().click();
        await this.page.waitForLoadState('domcontentloaded');
    }

   async addToWishlist(expectedButtonText) {
    const wishlistButtonInput = this.page.locator(locators.wishlist.addToWishlistButtonInput);
    await expect(wishlistButtonInput).toHaveValue(expectedButtonText);
    await this.page.locator(locators.wishlist.addToWishlistButton).click();
}

    async validateAddedToWishlistDialog(expectedTitle) {
    const wishlistConfirmation = this.page.locator(locators.wishlist.wishlistConfirmation);
    await expect(wishlistConfirmation).toBeVisible();
    await expect(wishlistConfirmation).toContainText('Added to');
    }

    async closeAfterWishlistConfirmation() {
        await this.page.close();
        
    }

}
module.exports = { ProductDetailsPage };
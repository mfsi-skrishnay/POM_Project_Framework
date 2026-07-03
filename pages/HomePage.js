const { expect } = require('@playwright/test');
const locators = {
    logo: 'a[id*="logo"]',
    searchBox: '#twotabsearchtextbox',
    searchButton: 'input[id*="submit"]',
    continueBtn: 'button:has-text("Continue shopping")'
};

class HomePage {
    constructor(page){
        this.page = page;
    }

    async navigateToHomePage() {
    await this.page.goto('/');
    await this.handleContinueShopping();
    }
    async handleContinueShopping() {
    const continueButton = this.page.locator(locators.continueBtn);
    try {
        await continueButton.waitFor({ state: 'visible', timeout: 5000 });
        await continueButton.click();
    } catch {
        console.log('Continue Shopping page not displayed.');
    }
    }
    
    async validateHomePage() {
        await expect(this.page.locator(locators.logo)).toBeVisible();
        await expect(this.page.locator(locators.searchBox)).toBeVisible();
        await expect(this.page.locator(locators.searchButton)).toBeVisible();
    }

    async searchProduct(productName) {
        await this.page.locator(locators.searchBox).fill(productName);
        await this.page.locator(locators.searchButton).click();
    }

}
module.exports = { HomePage };
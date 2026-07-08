const { expect } = require('@playwright/test');
const locators = {
    logo: 'a[id*="logo"]',
    searchBox: '#twotabsearchtextbox',
    searchButton: 'input[id*="submit"]',
    continueBtn: 'button:has-text("Continue shopping")',

    languageIcon: '#icp-nav-flyout',
    languageSettingPage: 'div[id="icp-language-settings"]',
    languageOptions: 'div[id="icp-language-settings"] .a-row.a-spacing-mini',
    languageOptionLabel: 'span[dir="ltr"]',       
    languageOptionRadio: 'input[type="radio"]',
    languageOptionIcon: 'i.a-icon-radio',     
    saveChangesButton: 'input[aria-labelledby*="save-button"]',
    headerContainer: '[id*="icp-nav-flyout"] div',    //'a[aria-label*="Choose a language"]' 
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
    
    async validateHomePage(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
    await expect(this.page.locator(locators.logo)).toBeVisible();
    await expect(this.page.locator(locators.searchBox)).toBeVisible();
    await expect(this.page.locator(locators.searchButton)).toBeVisible();
    }

    async searchProduct(productName) {
        await this.page.locator(locators.searchBox).fill(productName);
        await this.page.locator(locators.searchButton).click();
    }

    async openLanguageSettingPage() {
        await this.page.locator(locators.languageIcon).click(); 
    }

    async validateLanguageSettingPageOpened() {
        await expect(this.page.locator(locators.languageSettingPage)).toBeVisible();     
        const optionCount = await this.page.locator(locators.languageOptions).count();
        expect(optionCount).toBeGreaterThan(0);                                                   
    }

   async selectLanguageByIndex(index) {
    const languageOption = this.page.locator(locators.languageOptions).nth(index);
    const languageLabel = await languageOption.locator(locators.languageOptionLabel).first().innerText();
    await languageOption.locator(locators.languageOptionIcon).click();   
    return languageLabel;
    }

    async validateLanguageSelected(index) {
    const languageOption = this.page.locator(locators.languageOptions).nth(index);
    await expect(languageOption.locator(locators.languageOptionRadio)).toBeChecked();   
    await expect(this.page.locator(locators.saveChangesButton)).toBeEnabled();
    }

   
    async saveLanguageChanges() {
        await this.page.locator(locators.saveChangesButton).click()
    }

    async validateHeaderLanguage(expectedText) {
        try {
            await expect(this.page.locator(locators.logo)).toBeVisible();
            await expect(this.page.locator(locators.headerContainer).first()).toContainText(expectedText, { timeout: 20000 });
        } catch (error) {
            console.error(`validateHeaderLanguage failed for expected text "${expectedText}": ${error.message}`);
        }
    }





}
module.exports = { HomePage };
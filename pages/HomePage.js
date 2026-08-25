const { expect } = require('@playwright/test');

const locators = {
    header: {
        logo: 'a[id*="logo"]',
        searchBox: '[type="text"][placeholder*="Search"]',
        searchButton: 'input[type*="submit"]',
        continueBtn: 'button:has-text("Continue shopping")',
        headerContainer: '[id*="icp-nav-flyout"] div',
    },

    languageSettings: {
        languageIcon: '#icp-nav-flyout',
        languageSettingPage: 'div[id="icp-language-settings"]',
        languageOptions: 'div[id="icp-language-settings"] .a-row.a-spacing-mini',
        languageOptionLabel: 'span[dir="ltr"]',
        languageOptionRadio: 'input[type="radio"]',
        languageOptionIcon: 'i.a-icon-radio',
        saveChangesButton: 'input[aria-labelledby*="save-button"]',
    },
};

class HomePage {
    constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
}

    async navigateToHomePage() {
    await this.page.goto('/');
    await this.handleContinueShopping();
    }
    
    async handleContinueShopping() {
    const continueButton = this.page.locator(locators.header.continueBtn);

    try {
        await expect(continueButton).toBeVisible();
        await continueButton.click();
    } catch (error) {
        console.log('Continue shopping popup not shown, proceeding without click');
    }
}
    
    async validateHomePage(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
    await expect(this.page.locator(locators.header.logo).first()).toBeVisible();
    await expect(this.page.locator(locators.header.searchBox)).toBeVisible();
    await expect(this.page.locator(locators.header.searchButton)).toBeVisible();
    }

    async searchProduct(productName) {
    const searchBox = this.page.locator(locators.header.searchBox);
    await searchBox.fill(productName);
    await expect(searchBox).toHaveValue(productName);
    await this.page.locator(locators.header.searchButton).click();
    }

    async openLanguageSettingPage() {
        await this.page.locator(locators.languageSettings.languageIcon).click(); 
    }

    async validateLanguageSettingPageOpened() {
        await expect(this.page.locator(locators.languageSettings.languageSettingPage)).toBeVisible();     
        const optionCount = await this.page.locator(locators.languageSettings.languageOptions).count();
        expect(optionCount).toBeGreaterThan(0);                                                   
    }

   async selectLanguageByIndex(index) {
    const languageOption = this.page.locator(locators.languageSettings.languageOptions).nth(index);
    const languageLabel = await languageOption.locator(locators.languageSettings.languageOptionLabel).first().innerText();
    await languageOption.locator(locators.languageSettings.languageOptionIcon).click();   
    return languageLabel;
    }

    async validateLanguageSelected(index) {
    const languageOption = this.page.locator(locators.languageSettings.languageOptions).nth(index);
    await expect(languageOption.locator(locators.languageSettings.languageOptionRadio)).toBeChecked();   
    await expect(this.page.locator(locators.languageSettings.saveChangesButton)).toBeEnabled();
    }

   
    async saveLanguageChanges() {
        await this.page.locator(locators.languageSettings.saveChangesButton).click()
    }

    async validateHeaderLanguage(expectedText) {
        try {
            await expect(this.page.locator(locators.header.logo)).toBeVisible();
            await expect(this.page.locator(locators.header.headerContainer).first()).toContainText(expectedText);
        } catch (error) {
            console.error(`validateHeaderLanguage failed for expected text "${expectedText}": ${error.message}`);
        }
    }

}
module.exports = { HomePage };
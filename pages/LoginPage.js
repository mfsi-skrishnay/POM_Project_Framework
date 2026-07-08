const {expect} = require('@playwright/test');
const locators = {
    signInLink:  '#nav-link-accountList a',
    emailInput: '[id*="email_login"]',
    continueButton: '#continue',
    passwordInput: '#ap_password',
    signInButton: '#signInSubmit',
    accountName: '#nav-link-accountList-nav-line-1', 

    accountinfo: '#nav-link-accountList',
    signOutLink: '#nav-item-signout, a[href*="ref_=nav_signout"]' 

}

class LoginPage{

    constructor(page){
        this.page=page;
    }

    async openSignInPage(){
        await this.page.locator(locators.signInLink).click();   
    }

     async enterEmail(email) {
        await this.page.locator(locators.emailInput).fill(email);
        await this.page.locator(locators.continueButton).click();
    }

    async enterPassword(password) {
        await this.page.locator(locators.passwordInput).fill(password);
        await this.page.locator(locators.signInButton).click();
    }

    async validateLoggedIn() {
        await expect(this.page.locator(locators.accountName)).toBeVisible();
    }

    async login(email, password) {
        await this.openSignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.validateLoggedIn();
    }

    async logout() {
        await this.page.locator(locators.accountinfo).hover();
        await this.page.locator(locators.signOutLink).click();
        
    }

    
}
module.exports = { LoginPage };

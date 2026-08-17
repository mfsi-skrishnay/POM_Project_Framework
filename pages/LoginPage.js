const {expect} = require('@playwright/test');
const locators = {
    signInLink:  '#nav-link-accountList a',
    emailInput: '[id*="email_login"]',
    continueButton: '#continue',
    passwordInput: '#ap_password',
    signInButton: '#signInSubmit',
    accountName: '#nav-link-accountList-nav-line-1', 

    accountinfo: '#nav-link-accountList',
    signOutLink: 'a#nav-item-signout',     //#nav-item-signout, a[href*="ref_=nav_signout"]

    authError: '#auth-error-message-box .a-alert-content'

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

    async validateLoggedIn(expectedName) {
        await expect(this.page.locator(locators.accountName)).toBeVisible();
        await expect(this.page.locator(locators.accountName)).toContainText(expectedName);
    }

    async login(email, password) {
        await this.openSignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        
    }

    async logout() {
    await this.page.locator(locators.accountinfo).hover();
    const signOutLink = this.page.locator(locators.signOutLink);
    await expect(signOutLink).toBeVisible();
    await signOutLink.click();
    }

     
   async validateAuthError() {
        await expect(this.page.locator(locators.authError)).toBeVisible();
    }
 
    async clickContinueButton() {
        await this.page.locator(locators.continueButton).click();
    }
 
    async clickSignInButton() {
        await this.page.locator(locators.signInButton).click();
    }
 
    async continueWithEmailOnly(email) {
        await this.page.locator(locators.emailInput).fill(email);
        await this.page.locator(locators.continueButton).click();
    }
 
    async loginExpectingFailure(email, password) {
        await this.openSignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        return this.page.locator(locators.authError).isVisible();
    }
  
}
module.exports = { LoginPage };

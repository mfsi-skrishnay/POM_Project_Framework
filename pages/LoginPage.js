const {expect} = require('@playwright/test');

const locators = {
    signIn: {
        signInLink: '#nav-link-accountList a',
        emailInput: '[id*="email_login"]',
        continueButton: '#continue',
        passwordInput: '#ap_password',
        signInButton: '#signInSubmit',
    },

    account: {
        accountName: '#nav-link-accountList-nav-line-1',
        accountinfo: '#nav-link-accountList',
        signOutLink: 'a#nav-item-signout',
    },

    errors: {
        authError: '#auth-error-message-box .a-alert-content',
    },
}

class LoginPage{

    constructor(page){
        this.page=page;
    }

    async openSignInPage(){
        await this.page.locator(locators.signIn.signInLink).click();   
    }

     async enterEmail(email) {
        await this.page.locator(locators.signIn.emailInput).fill(email);
        await this.page.locator(locators.signIn.continueButton).click();
    }

    async enterPassword(password) {
        await this.page.locator(locators.signIn.passwordInput).fill(password);
        await this.page.locator(locators.signIn.signInButton).click();
    }

    async validateLoggedIn(expectedName) {
        await expect(this.page.locator(locators.account.accountName)).toBeVisible();
        await expect(this.page.locator(locators.account.accountName)).toContainText(expectedName);
    }

    async login(email, password) {
        await this.openSignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        
    }

    async logout() {
    await this.page.locator(locators.account.accountinfo).hover();
    const signOutLink = this.page.locator(locators.account.signOutLink);
    await expect(signOutLink).toBeVisible();
    await signOutLink.click();
    }

     
   async validateAuthError() {
        await expect(this.page.locator(locators.errors.authError)).toBeVisible();
    }
 
    async clickContinueButton() {
        await this.page.locator(locators.signIn.continueButton).click();
    }
 
    async clickSignInButton() {
        await this.page.locator(locators.signIn.signInButton).click();
    }
 
    async continueWithEmailOnly(email) {
        await this.page.locator(locators.signIn.emailInput).fill(email);
        await this.page.locator(locators.signIn.continueButton).click();
    }
 
    async loginExpectingFailure(email, password) {
        await this.openSignInPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        return this.page.locator(locators.errors.authError).isVisible();
    }
  
}
module.exports = { LoginPage };
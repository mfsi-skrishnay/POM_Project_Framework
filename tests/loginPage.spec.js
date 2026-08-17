const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { LoginPage } = require('../pages/LoginPage.js');
const testData = require('../utils/testData');

const expectedName = 'Krishna';

let homePageobj, loginPageobj;

test('TC-001 - Login with invalid password', async ({ page }) => {
    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);

    await homePageobj.navigateToHomePage();
    await loginPageobj.openSignInPage();

    await loginPageobj.enterEmail(testData.email);
    await loginPageobj.enterPassword('WrongP@ssw0rd!');

    await loginPageobj.validateAuthError();
});

test('TC-002 - Empty fields validation (email and password)', async ({ page }) => {
    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);

    await homePageobj.navigateToHomePage();
    await loginPageobj.openSignInPage();

    await loginPageobj.clickContinueButton();
    await loginPageobj.validateAuthError();

    await loginPageobj.enterEmail(testData.email);
    await loginPageobj.clickSignInButton();
    await loginPageobj.validateAuthError();
});

test('TC-003 - Username case sensitivity / normalization', async ({ page }) => {
    if (!/[A-Za-z]/.test(testData.email)) {
        test.skip('Configured username does not contain letters; skipping case-sensitivity test');
    }

    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);
    const upperEmail = testData.email.toUpperCase();

    await homePageobj.navigateToHomePage();
    await loginPageobj.openSignInPage();
    await loginPageobj.enterEmail(upperEmail);
    await loginPageobj.enterPassword(testData.password);

    await loginPageobj.validateLoggedIn(expectedName);

    await loginPageobj.logout();
    await loginPageobj.validateLoggedIn(expectedName);
});

test('TC-004 - Successful login with valid credentials', async ({ page }) => {
    homePageobj = new HomePage(page);
    loginPageobj = new LoginPage(page);

    await homePageobj.navigateToHomePage();
    await loginPageobj.login(testData.email, testData.password);

    await loginPageobj.validateLoggedIn(expectedName);

    await loginPageobj.logout();
    await loginPageobj.validateLoggedIn(expectedName);
});
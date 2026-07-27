const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');

let homePageobj;
test('Scenario 4 - Language Preference Change and Validation', async ({ page }) => {
    homePageobj = new HomePage(page);

    const hindiIndex = 1;      
    const englishIndex = 0;    
    const hindiHeaderText = 'HI';      
    const englishHeaderText = 'EN';    

    // Step 1: Open home page and click language icon
    await homePageobj.navigateToHomePage();
    await homePageobj.openLanguageSettingPage();
    await homePageobj.validateLanguageSettingPageOpened();

    // Step 2: Select hindi by index
    await homePageobj.selectLanguageByIndex(hindiIndex);
    await homePageobj.validateLanguageSelected(hindiIndex);

    // Step 3: Save changes and validate hindi header
    await homePageobj.saveLanguageChanges();
    await homePageobj.validateHeaderLanguage(hindiHeaderText);

    // Step 4: Reopen language settings and select english
    await homePageobj.openLanguageSettingPage();
    await homePageobj.selectLanguageByIndex(englishIndex);
    await homePageobj.validateLanguageSelected(englishIndex);

    // Step 5: Save changes and validate english header
    await homePageobj.saveLanguageChanges();
    await homePageobj.validateHeaderLanguage(englishHeaderText);
});
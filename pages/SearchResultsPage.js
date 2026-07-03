const { expect } = require('@playwright/test');
const locators = {
    searchBox: '#twotabsearchtextbox',
    productList: 'div[data-component-type*="result"]',
    productTitle: 'a:has(h2)'
};

class SearchResultsPage {
    constructor(page) {
        this.page = page;
    }

    async validateSearchResults(searchKeyword) {

    await expect(this.page.locator(locators.searchBox)).toHaveValue(searchKeyword); // Verify searched keyword
    await expect(this.page.locator(locators.productList).first()).toBeVisible();  // Verify search results are displayed
    
    const resultCount = await this.page.locator(locators.productList).count();   // Verify search results count
    expect(resultCount).toBeGreaterThan(0);
    
    }
   
    async openProduct(index) {

        const newPagePromise = this.page.context().waitForEvent('page');
        await this.page.locator(locators.productList).nth(index).locator(locators.productTitle).click();
        const productPage = await newPagePromise;
        await productPage.waitForLoadState();
        return productPage;
    }

    async validateSearchResultsAfterBack(searchKeyword) {

        await expect(this.page.locator(locators.searchBox)).toHaveValue(searchKeyword);
        await expect(this.page.locator(locators.productList).first()).toBeVisible();
    }
}
module.exports = { SearchResultsPage };
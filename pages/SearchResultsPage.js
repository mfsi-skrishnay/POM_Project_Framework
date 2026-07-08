const { expect } = require('@playwright/test');
const locators = {
    searchBox: '#twotabsearchtextbox',
    productList: 'div[data-component-type*="result"]',
    productTitle: 'h2 span',
    
    brandFilterOptions: '#filter-p_123 li',
    brandFilter: 'a[aria-label*="the filter"]',
    brandText: 'span.a-size-base.a-color-base',

    // RAM Size Filter
    ramFilterOptions: '#filter-p_n_g-1003119721111 li',
    ramFilter: 'a[aria-label*="the filter"]',
    ramText: 'span.a-size-base.a-color-base',

    // Processor Count Filter
    processorFilterOptions: '#filter-p_n_g-1003513532111 li',
    processorFilter: 'a[aria-label*="the filter"]',
    processorText: 'span.a-size-base.a-color-base',
    processorCheckbox: 'input[type="checkbox"]',

    //sorting products
    sortDropdown: 'select[id*="sort"]',
    sortOptions: 'select[id*="sort"] option',
    productPrice: 'span.a-price-whole'

};

class SearchResultsPage {
    constructor(page) {
        this.page = page;
    }

    getNonSponsoredProducts() {
    return this.page.locator(locators.productList).filter({hasNot: this.page.getByText('Sponsored')});
}

    async validateSearchResults(searchKeyword) {

    await expect(this.page.locator(locators.searchBox)).toHaveValue(searchKeyword); 
    await expect(this.page.locator(locators.productList).first()).toBeVisible();  
    const resultCount = await this.page.locator(locators.productList).count();   
    expect(resultCount).toBeGreaterThan(0);
    
    }
   
    async openProduct(index) {

        const newPagePromise = this.page.context().waitForEvent('page');    //waiting for a new browser tab to open
        await this.getNonSponsoredProducts().nth(index).locator(locators.productTitle).click();  //click on non-sponsored product based on index
        const productPage = await newPagePromise;
        await productPage.waitForLoadState();
        return productPage;
    }

    async validateSearchResultsAfterBack(searchKeyword) {
        await expect(this.page.locator(locators.searchBox)).toHaveValue(searchKeyword);
        await expect(this.page.locator(locators.productList).first()).toBeVisible();
    }

   async selectBrandByIndex(index) {
    const brandOption = this.page.locator(locators.brandFilterOptions).nth(index);
    const brandName = await brandOption.locator(locators.brandText).innerText();
    await brandOption.locator(locators.brandFilter).click();
    await expect(this.page.locator(locators.productList).first()).toBeVisible();
    return brandName.trim();
    }
     async validateBrandSelected(brandName) {
        await expect(this.page.getByText(brandName, { exact: true }).first()).toBeVisible();
    }
 
    async validateProductTitles(brandName) {
    try {
        const titles = await this.page.locator(locators.productList).locator(locators.productTitle).allTextContents();
        for (const title of titles) {
        const actualTitle = title.toLowerCase();
        const expectedBrand = brandName.toLowerCase();
        expect(actualTitle,`Brand mismatch for product: ${title}`).toContain(expectedBrand);
        }
    } catch (error) {
        console.error(`validateProductTitles failed for brand "${brandName}": ${error.message}`);
        throw new Error(`validateProductTitles failed for brand "${brandName}": ${error.message}`);
    }}

    async selectRamSizeByIndex(index) {
        const ramOption = this.page.locator(locators.ramFilterOptions).nth(index);
        const ramSize = await ramOption.locator(locators.ramText).innerText();
        await ramOption.locator(locators.ramFilter).click();
        await expect(this.page.locator(locators.productList).first()).toBeVisible();
        return ramSize.trim();
    }

    async validateRamSelected(ramSize){
        expect(await this.page.getByText(ramSize, { exact: true }).first().isVisible());

    }

    async validateProductRam(ramSize) {
    const products = await this.getNonSponsoredProducts().locator(locators.productTitle).allTextContents();
    for (const product of products) {
        expect(product.toLowerCase().replaceAll(' ', '')).toContain(ramSize.toLowerCase().replaceAll(' ', ''));
    }
    }

    async selectProcessorCountByIndex(index) {
    const processorOption = this.page.locator(locators.processorFilterOptions).nth(index);
    const processorCount = await processorOption.locator(locators.processorText).allTextContents();
    await processorOption.locator(locators.processorFilter).click();
    await expect(this.page.locator(locators.productList).first()).toBeVisible();
    return processorCount;
    }

     async validateProcessorSelected(processorCount) {
        try {
            await expect(this.page.getByText(processorCount, { exact: true }).first()).toBeVisible();
        } catch (error) {
            console.error(`validateProcessorSelected failed for processor count "${processorCount}": ${error.message}`);
            throw new Error(`validateProcessorSelected failed for processor count "${processorCount}": ${error.message}`);
        }
    }

    async validateProcessorResults(processorCount) {
    const count = await this.getNonSponsoredProducts().count();
    expect(count).toBeGreaterThan(0);
    console.log(`Results displayed for processor count: ${processorCount}`);
    }

    async selectSortByIndex(index) {
    const sortOption = await this.page.locator(locators.sortOptions).nth(index).innerText();
    await this.page.locator(locators.sortDropdown).selectOption({ index: index });
    await expect(this.page.locator(locators.productList).first()).toBeVisible();
    return sortOption.trim();
    }

    async validateSelectedSort(sortOption) {
    await expect(this.page.locator(locators.sortDropdown)).toContainText(sortOption);
    }

    async validatePriceLowToHigh() {
    const prices = await this.getNonSponsoredProducts().locator(locators.productPrice).allTextContents();
    for (let i = 0; i < prices.length - 1; i++) {
        const currentPrice = Number(prices[i].replace(/,/g, ''));
        const nextPrice = Number(prices[i + 1].replace(/,/g, ''));
        expect(currentPrice).toBeLessThanOrEqual(nextPrice);
    }
    }
    
}
module.exports = { SearchResultsPage };
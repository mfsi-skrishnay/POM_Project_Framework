const { expect } = require('@playwright/test');

const locators = {
    results: {
        searchBox: '[type="text"][placeholder*="Search"]',
        productList: 'div[data-component-type*="result"]',
        productTitle: 'a h2',
    },

    brandFilter: {
        brandFilterOptions: '#filter-p_123 li',
        brandFilter: 'a[aria-label*="the filter"]',
        brandText: 'span.a-size-base.a-color-base',
    },

    ramFilter: {
        ramFilterOptions: '#filter-p_n_g-1003119721111 li',
        ramFilter: 'a[aria-label*="the filter"]',
        ramText: 'span.a-size-base.a-color-base',
    },

    processorFilter: {
        processorFilterOptions: '#filter-p_n_g-1003513532111 li',
        processorFilter: 'a[aria-label*="the filter"]',
        processorText: 'span.a-size-base.a-color-base',
        processorCheckbox: 'input[type="checkbox"]',
    },

    sorting: {
        sortDropdown: 'select[id*="sort"]',
        sortOptions: 'select[id*="sort"] option',
        productPrice: 'span.a-price-whole',
    },
};

class SearchResultsPage {
    constructor(page, isMobile) {
    this.page = page;
    this.isMobile = isMobile;
    }

    getNonSponsoredProducts() {
    return this.page.locator(locators.results.productList).filter({hasNot: this.page.getByText('Sponsored')});
    }

    async validateSearchResults(searchKeyword) {
    await expect(this.page.locator(locators.results.searchBox)).toHaveValue(searchKeyword); 
    await expect(this.page.locator(locators.results.productList).first()).toBeVisible();  
    const resultCount = await this.page.locator(locators.results.productList).count();   
    expect(resultCount).toBeGreaterThan(0);
    }
   
    async openProduct(index) {
    await this.page.bringToFront();   
    const product = this.getNonSponsoredProducts().nth(index).locator(locators.results.productTitle);
    if (this.page.viewportSize().width <= 768) {
        await product.click(); 
        await this.page.waitForURL(/\/dp\/|\/gp\/product\//);
        return this.page;
    }
    const newPagePromise = this.page.context().waitForEvent('page');
    await product.click(); 
    const productPage = await newPagePromise;
    //await productPage.waitForLoadState('domcontentloaded');
    return productPage;
    }

    async validateSearchResultsAfterBack(searchKeyword) {
        await expect(this.page.locator(locators.results.searchBox)).toHaveValue(searchKeyword);
        await expect(this.page.locator(locators.results.productList).first()).toBeVisible();
    }

   async selectBrandByIndex(index) {
    const brandOption = this.page.locator(locators.brandFilter.brandFilterOptions).nth(index);
    const brandName = await brandOption.locator(locators.brandFilter.brandText).innerText();
    await brandOption.locator(locators.brandFilter.brandFilter).click();
    await expect(this.page.locator(locators.results.productList).first()).toBeVisible();
    return brandName.trim();
    }
     async validateBrandSelected(brandName) {
        await expect(this.page.getByText(brandName, { exact: true }).first()).toBeVisible();
    }
 
    async validateProductTitles(brandName) {
    try {
        const titles = await this.page.locator(locators.results.productList).locator(locators.results.productTitle).allTextContents();
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
        const ramOption = this.page.locator(locators.ramFilter.ramFilterOptions).nth(index);
        const ramSize = await ramOption.locator(locators.ramFilter.ramText).innerText();
        await ramOption.locator(locators.ramFilter.ramFilter).click();
        await expect(this.page.locator(locators.results.productList).first()).toBeVisible();
        return ramSize.trim();
    }

    async validateRamSelected(ramSize){
        expect(await this.page.getByText(ramSize, { exact: true }).first().isVisible());

    }

    async validateProductRam(ramSize) {
    const products = await this.getNonSponsoredProducts().locator(locators.results.productTitle).allTextContents();
    for (const product of products) {
        expect(product.toLowerCase().replaceAll(' ', '')).toContain(ramSize.toLowerCase().replaceAll(' ', ''));
    }
    }

    async selectProcessorCountByIndex(index) {
    const processorOption = this.page.locator(locators.processorFilter.processorFilterOptions).nth(index);
    const processorCount = await processorOption.locator(locators.processorFilter.processorText).allTextContents();
    await processorOption.locator(locators.processorFilter.processorFilter).click();
    await expect(this.page.locator(locators.results.productList).first()).toBeVisible();
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
    const sortOption = await this.page.locator(locators.sorting.sortOptions).nth(index).innerText();
    await this.page.locator(locators.sorting.sortDropdown).selectOption({ index: index });
    await expect(this.page.locator(locators.results.productList).first()).toBeVisible();
    return sortOption.trim();
    }

    async validateSelectedSort(sortOption) {
    await expect(this.page.locator(locators.sorting.sortDropdown)).toContainText(sortOption);
    }

    async validatePriceLowToHigh() {
    const prices = await this.getNonSponsoredProducts().locator(locators.sorting.productPrice).allTextContents();
    for (let i = 0; i < prices.length - 1; i++) {
        const currentPrice = Number(prices[i].replace(/,/g, ''));
        const nextPrice = Number(prices[i + 1].replace(/,/g, ''));
        expect(currentPrice).toBeLessThanOrEqual(nextPrice);
    }
    }
    
}
module.exports = { SearchResultsPage };
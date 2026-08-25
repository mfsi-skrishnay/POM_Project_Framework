const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage.js');
const { SearchResultsPage } = require('../pages/SearchResultsPage.js');

let homePageobj, searchResultsPageobj;

test.describe('Scenario 2 - Filter application and validation', () => {
    test('TC01 - Apply filters, sort and validate results', async ({ page }) => {
        homePageobj = new HomePage(page);
        searchResultsPageobj = new SearchResultsPage(page);
        const productName = 'Laptop';
        const brandFilterIndex = 1;
        const ramFilterIndex = 1;
        const processorFilterIndex = 0;
        const sortByIndex = 1;

        // Step 1: Search for Laptop
        await homePageobj.navigateToHomePage();
        await homePageobj.searchProduct(productName);
        await searchResultsPageobj.validateSearchResults(productName);

        // Step 2: Apply brand filter
        const brandName = await searchResultsPageobj.selectBrandByIndex(brandFilterIndex);
        await searchResultsPageobj.validateBrandSelected(brandName);
        await searchResultsPageobj.validateProductTitles(brandName);

        //Step 3: Apply RAM size filter
        const ramSize = await searchResultsPageobj.selectRamSizeByIndex(ramFilterIndex);
        await searchResultsPageobj.validateRamSelected(ramSize);
        await searchResultsPageobj.validateProductRam(ramSize)

        //Step 4 : Apply processor count filter
        const processorCount = await searchResultsPageobj.selectProcessorCountByIndex(processorFilterIndex);
        await searchResultsPageobj.validateProcessorSelected(processorCount);
        await searchResultsPageobj.validateProcessorResults(processorCount);

        //Step 5: Sort the results
        const sortOption = await searchResultsPageobj.selectSortByIndex(sortByIndex);
        await searchResultsPageobj.validateSelectedSort(sortOption);
        await searchResultsPageobj.validatePriceLowToHigh();

    });
});
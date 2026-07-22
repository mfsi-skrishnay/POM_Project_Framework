const { test, expect } = require('@playwright/test');
const path = require('path');

test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
});

test('Download PDF File', async ({ page }) => {
        await page.locator('#inputText').fill('THIS IS SAMPLE FILE FOR CHECKING DOWNLOADING IN PLAYWRIGHT');
        
        await page.locator('#generatePdf').click();
        const downloadLink = page.locator('#pdfDownloadLink').first();
        await expect(downloadLink).toBeVisible();
        const downloadPromise = page.waitForEvent('download');
        await downloadLink.click();
        const download = await downloadPromise;

        expect(download.suggestedFilename()).toContain('.pdf');
        const savePath = path.join(__dirname,'../Files',download.suggestedFilename());
        await download.saveAs(savePath);
        
    });

test('Upload Single File', async ({ page }) => {
        
        await page.setInputFiles('#singleFileInput', 'C:\\Users\\Mindfire\\Documents\\Projects\\POM_Project_Framework\\Files\\sampleFile.pdf');
        await page.locator("[id*='singleFile'] button[type='submit']").click();
        await expect(page.locator('#singleFileStatus')).toContainText('Single file selected');
    });

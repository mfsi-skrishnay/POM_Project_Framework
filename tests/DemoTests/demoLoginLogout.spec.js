const { test, expect } = require('@playwright/test');
//Created using Copilot after playwright mcp integration 

// Demo test following the project's test style: navigate -> login -> verify -> logout -> verify
test.describe('Demo - Practice Test Login', () => {

    test('Login with student / Password123 and logout', async ({ page }) => {
        // Navigate to the practice login page
        await page.goto('https://practicetestautomation.com/practice-test-login/');

        // Fill in credentials
        await page.fill('#username', 'student');
        await page.fill('#password', 'Password123');

        // Submit the form
        // The submit button on the page uses type="submit" — this selector is robust
        await page.locator('button[id="submit"]').click();

        // Verify logout is visible (successful login landed on the secure page)
        const logoutLocator = page.locator('text=Log out');
        await expect(logoutLocator).toBeVisible({ timeout: 5000 });

        // Click logout
        await logoutLocator.click();

        // Verify we are back on the login page (username input visible)
        await expect(page.locator('#username')).toBeVisible({ timeout: 5000 });
    });

});

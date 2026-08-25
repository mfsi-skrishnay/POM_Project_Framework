const { test, expect } = require('@playwright/test');

test.describe('Booking API mocks', () => {

    test('TC01 - Mock GET All Bookings', async ({ page }) => {
        await page.route('**/booking', async (route) => {        // Mock Api response
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify([
                    { bookingid: 101 },
                    { bookingid: 102 },
                    { bookingid: 103 }
                ])
            });
        });

        const response = await page.evaluate(async () => {
            const res = await fetch('https://restful-booker.herokuapp.com/booking');
            return await res.json();
        });

        console.log(response);
        expect(response.length).toBe(3);
        expect(response[0].bookingid).toBe(101);
        expect(response[1].bookingid).toBe(102);
        expect(response[2].bookingid).toBe(103);
    });

    test('TC02 - Mock Booking Not Found', async ({ page }) => {
        await page.route('**/booking/1', async (route) => {          // Mock 404 response
            await route.fulfill({
                status: 404,
                contentType: 'application/json',
                body: JSON.stringify({
                    error: 'Booking Not Found'
                })
            });
        });

        const response = await page.evaluate(async () => {
            const res = await fetch('https://restful-booker.herokuapp.com/booking/1');
            return {
                status: res.status,
                body: await res.json()
            };

        });

        console.log(response);
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Booking Not Found');
    });

});
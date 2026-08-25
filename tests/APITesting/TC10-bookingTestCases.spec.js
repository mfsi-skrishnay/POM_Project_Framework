const { test, expect } = require('@playwright/test');
const { BookingApi } = require('../../pages/ApiDemo/bookingApi');
const { authPayload } = require('../../utils/testData');

let bookingApi;

const validBookingPayload = {
    firstname: 'Sam',
    lastname: 'Muller',
    totalprice: 500,
    depositpaid: true,
    bookingdates: {
        checkin: '2026-07-22',
        checkout: '2026-07-30'
    },
    additionalneeds: 'Breakfast'
};

test.beforeEach(async ({ request }) => {
    bookingApi = new BookingApi(request);
});

test.describe('Booking API - validation scenarios', () => {

    test('TC01-POST positive case : create booking ', async () => {
        const response = await bookingApi.createBooking(validBookingPayload);

        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.statusText()).toBe('OK');

        expect(response.headers()['content-type']).toContain('application/json');

        const body = await response.json();
        console.log(body);

        expect(body).toHaveProperty('bookingid');
        expect(typeof body.bookingid).toBe('number');
        expect(body.bookingid).toBeGreaterThan(0);

        expect(body).toHaveProperty('booking');
        expect(body.booking).toHaveProperty('firstname');
        expect(body.booking).toHaveProperty('lastname');
        expect(body.booking).toHaveProperty('totalprice');
        expect(body.booking).toHaveProperty('depositpaid');
        expect(body.booking).toHaveProperty('bookingdates');
        expect(body.booking).toHaveProperty('additionalneeds');
        expect(body.booking.bookingdates).toHaveProperty('checkin');
        expect(body.booking.bookingdates).toHaveProperty('checkout');

        expect(body.booking.firstname).toBe(validBookingPayload.firstname);
        expect(body.booking.lastname).toBe(validBookingPayload.lastname);
        expect(body.booking.totalprice).toBe(validBookingPayload.totalprice);
        expect(body.booking.depositpaid).toBe(validBookingPayload.depositpaid);
        expect(body.booking.additionalneeds).toBe(validBookingPayload.additionalneeds);

        expect(body.booking.bookingdates.checkin).toBe(validBookingPayload.bookingdates.checkin);
        expect(body.booking.bookingdates.checkout).toBe(validBookingPayload.bookingdates.checkout);
    });

    test('TC02-POST Negative case : missing required field', async () => {
        const payload = { ...validBookingPayload };
        delete payload.firstname;
        const response = await bookingApi.createBooking(payload);

    try {
        expect(response.status()).toBe(400);
    }
    catch (error) {
        console.error('Missing required field validation failed');
        console.error(`Expected status : 400`);
        console.error(`Actual status   : ${response.status()}`);
        throw error;
    }
    });

    test('TC03-POST negative case : invalid data type', async () => {
        const payload = { ...validBookingPayload, totalprice: "Five Hundred" };
        const response = await bookingApi.createBooking(payload);

        try {
            expect(response.status()).toBe(400);
        }
        catch (error) {
            console.error('Invalid data type validation failed');
            console.error(`Expected status : 400`);
            console.error(`Actual status   : ${response.status()}`);
            throw error;
        }
    });

    test('TC04-Edge case : Empty request body', async () => {
        const response = await bookingApi.createBooking({});
        try {
            expect(response.status()).toBe(500);
        }
        catch (error) {
            console.error('Empty request body validation failed');
            console.error(`Expected status : 500`);
            console.error(`Actual status   : ${response.status()}`);
            throw error;
        }
    });

    test('TC05-Edge case : empty lastname', async () => {
        const payload = { ...validBookingPayload, lastname: '' };
        const response = await bookingApi.createBooking(payload);

        try {
            expect(response.status()).toBe(400);
        }
        catch (error) {
            console.error('Empty lastname validation failed');
            console.error(`Expected status : 400`);
            console.error(`Actual status   : ${response.status()}`);
            throw error;
        }
    });

    test('TC06-Edge case : negative total price', async () => {
        const payload = { ...validBookingPayload, totalprice: -100 };
        const response = await bookingApi.createBooking(payload);

        try {
            expect(response.status()).toBe(400);
        }
        catch (error) {
            console.error('Negative total price validation failed');
            console.error(`Expected status : 400`);
            console.error(`Actual status   : ${response.status()}`);
            throw error;
        }
    });

    test('TC07-Edge case : special characters in first name', async () => {
        const payload = { ...validBookingPayload, firstname: '@#$%^&*()_+' };
        const response = await bookingApi.createBooking(payload);

        try {
            expect(response.status()).toBe(400);
        }
        catch (error) {
            console.error('Special characters validation failed');
            console.error(`Expected status : 400`);
            console.error(`Actual status   : ${response.status()}`);
            throw error;
        }
    });

});
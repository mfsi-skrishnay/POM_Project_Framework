const { test, expect } = require('@playwright/test');
const { BookingApi } = require('../../pages/ApiDemo/bookingApi');

const {
    assertSuccessResponse,
    assertCreateBookingResponse,
    assertErrorStatus
} = require('../../utils/apiAssertions');

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

        assertSuccessResponse(response);

        const body = await response.json();
        console.log(body);

        assertCreateBookingResponse(body, validBookingPayload);
    });

    test('TC02-POST Negative case : missing required field', async () => {
        const payload = { ...validBookingPayload };
        delete payload.firstname;
        const response = await bookingApi.createBooking(payload);

        assertErrorStatus(response, 400);
    });

    test('TC03-POST negative case : invalid data type', async () => {
        const payload = { ...validBookingPayload, totalprice: "Five Hundred" };
        const response = await bookingApi.createBooking(payload);

        assertErrorStatus(response, 400);
    });

    test('TC04-Edge case : Empty request body', async () => {
        const response = await bookingApi.createBooking({});

        assertErrorStatus(response, 500);
    });

    test('TC05-Edge case : empty lastname', async () => {
        const payload = { ...validBookingPayload, lastname: '' };
        const response = await bookingApi.createBooking(payload);

        assertErrorStatus(response, 400);
    });

    test('TC06-Edge case : negative total price', async () => {
        const payload = { ...validBookingPayload, totalprice: -100 };
        const response = await bookingApi.createBooking(payload);

        assertErrorStatus(response, 400);
    });

    test('TC07-Edge case : special characters in first name', async () => {
        const payload = { ...validBookingPayload, firstname: '@#$%^&*()_+' };
        const response = await bookingApi.createBooking(payload);

        assertErrorStatus(response, 400);
    });

});
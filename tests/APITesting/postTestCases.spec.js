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

test('Test1 POST Create Booking - Positive Scenario', async () => {
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

test('Test2 POST Negativ case - Missing Required Field', async () => {
    const payload = { ...validBookingPayload };
    delete payload.firstname;

    const response = await bookingApi.createBooking(payload);
    expect([200, 400, 500]).toContain(response.status());

    if (response.status() === 200) {
        const body = await response.json();

        expect(body.booking.firstname).toBeUndefined();
        expect(body.booking.lastname).toBe(payload.lastname);
        expect(body.booking.totalprice).toBe(payload.totalprice);
    }
});

test('Test3 POST Negative case - Invalid Data Type', async () => {
    const payload = {...validBookingPayload,totalprice: "Five Hundred"};
    const response = await bookingApi.createBooking(payload);

    expect([200, 400, 500]).toContain(response.status());

    if (response.status() === 200) {
        const body = await response.json();

        expect(body.booking.totalprice).not.toBe(payload.totalprice);
        expect(body.booking.totalprice).toBe(null);
    }
});

test('Test4 POST negative case - Empty Request Body', async () => {
    const response = await bookingApi.createBooking({});
    expect([200, 400, 500]).toContain(response.status());

    if (response.status() === 200) {
        const body = await response.json();

        expect(body).toHaveProperty('booking');
        expect(body.booking.firstname).toBeUndefined();
        expect(body.booking.lastname).toBeUndefined();
    }
});

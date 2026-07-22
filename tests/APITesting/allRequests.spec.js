const { test, expect } = require('@playwright/test');
const { BookingApi } = require('../../pages/ApiDemo/bookingApi');
const { authPayload } = require('../../utils/testData');

let bookingApi;
const BookingId=2;
const bookingPayload = {
        firstname: 'Sam',
        lastname: 'Muller',
        totalprice: 500,
        depositpaid: true,
        bookingdates: 
        {
            checkin: '2026-07-22',
            checkout: '2026-07-30'
        },
        additionalneeds: 'Breakfast'
    };

    const updatePayload = {
        firstname: 'Krishna',
        lastname: 'Yadav',
        totalprice: 800,
        depositpaid: false,
        bookingdates: 
        {
            checkin: '2026-08-01',
            checkout: '2026-08-10'
        },
        additionalneeds: 'Lunch'
    };

    const patchPayload = {
        firstname: 'Thomas',
        additionalneeds: 'Dinner'
    };

test.beforeEach(async ({ request }) => {
    bookingApi = new BookingApi(request);
});

    test('Test1 GET All Bookings', async () => {
        const response = await bookingApi.getAllBookings();
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.statusText()).toBe('OK');
        expect(response.headers()['content-type']).toContain('application/json');

        const body = await response.json();

        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('bookingid');

    });

    test('Test2 GET Booking By Id', async () => {
        const response = await bookingApi.getBookingById(BookingId);
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.headers()['content-type']).toContain('application/json');
        
        const body = await response.json();

        console.log(body)
        expect(body).toHaveProperty('firstname');
        expect(body).toHaveProperty('lastname');
        expect(body).toHaveProperty('totalprice');
        expect(body).toHaveProperty('depositpaid');
        expect(body).toHaveProperty('bookingdates');
        expect(body).toHaveProperty('additionalneeds');
        expect(body.bookingdates).toHaveProperty('checkin');
        expect(body.bookingdates).toHaveProperty('checkout');

        expect(typeof body.firstname).toBe('string');
        expect(typeof body.lastname).toBe('string');
        expect(typeof body.totalprice).toBe('number');
        expect(typeof body.depositpaid).toBe('boolean');
        expect(typeof body.additionalneeds).toBe('string');

    });

    test('Test3 POST Create Booking', async () => {
    const response = await bookingApi.createBooking(bookingPayload);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe('OK');

    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    console.log(body);

    // Booking ID Validations
    expect(body).toHaveProperty('bookingid');
    expect(typeof body.bookingid).toBe('number');
    expect(body.bookingid).toBeGreaterThan(0);

    // Booking Object Validations
    expect(body).toHaveProperty('booking');
    expect(body.booking).toHaveProperty('firstname');
    expect(body.booking).toHaveProperty('lastname');
    expect(body.booking).toHaveProperty('totalprice');
    expect(body.booking).toHaveProperty('depositpaid');
    expect(body.booking).toHaveProperty('bookingdates');
    expect(body.booking).toHaveProperty('additionalneeds');
    expect(body.booking.bookingdates).toHaveProperty('checkin');
    expect(body.booking.bookingdates).toHaveProperty('checkout');

    // Value Validations
    expect(body.booking.firstname).toBe(bookingPayload.firstname);
    expect(body.booking.lastname).toBe(bookingPayload.lastname);
    expect(body.booking.totalprice).toBe(bookingPayload.totalprice);
    expect(body.booking.depositpaid).toBe(bookingPayload.depositpaid);
    expect(body.booking.additionalneeds).toBe(bookingPayload.additionalneeds);

    expect(body.booking.bookingdates.checkin).toBe(bookingPayload.bookingdates.checkin);
    expect(body.booking.bookingdates.checkout).toBe(bookingPayload.bookingdates.checkout);
    });

    test('Test4 PUT Update Booking', async () => {
    const createResponse = await bookingApi.createBooking(bookingPayload);
    expect(createResponse.status()).toBe(200);
    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;

    // Generate Token
    const authResponse = await bookingApi.createToken(authPayload);
    expect(authResponse.status()).toBe(200);
    expect(authResponse.ok()).toBeTruthy();
    const authBody = await authResponse.json();
    const token = authBody.token;

    // PUT Request
    const response = await bookingApi.updateBooking(bookingId,token,updatePayload);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    console.log(body);

    expect(body).toHaveProperty('firstname');
    expect(body).toHaveProperty('lastname');
    expect(body).toHaveProperty('totalprice');
    expect(body).toHaveProperty('depositpaid');
    expect(body).toHaveProperty('bookingdates');
    expect(body).toHaveProperty('additionalneeds');
    expect(body.bookingdates).toHaveProperty('checkin');
    expect(body.bookingdates).toHaveProperty('checkout');

    expect(typeof body.firstname).toBe('string');
    expect(typeof body.lastname).toBe('string');
    expect(typeof body.totalprice).toBe('number');
    expect(typeof body.depositpaid).toBe('boolean');
    expect(typeof body.additionalneeds).toBe('string');

    expect(body.firstname).toBe(updatePayload.firstname);
    expect(body.lastname).toBe(updatePayload.lastname);
    expect(body.totalprice).toBe(updatePayload.totalprice);
    expect(body.depositpaid).toBe(updatePayload.depositpaid);
    expect(body.additionalneeds).toBe(updatePayload.additionalneeds);

    expect(body.bookingdates.checkin).toBe(updatePayload.bookingdates.checkin);
    expect(body.bookingdates.checkout).toBe(updatePayload.bookingdates.checkout);
});


    test('Test5 PATCH Partial Update Booking', async () => {
    const createResponse = await bookingApi.createBooking(bookingPayload);
    expect(createResponse.status()).toBe(200);
    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;

    const authResponse = await bookingApi.createToken(authPayload);   // Generate Token
    expect(authResponse.status()).toBe(200);     
    const authBody = await authResponse.json();
    const token = authBody.token;

    const response = await bookingApi.partialUpdateBooking(bookingId,token,patchPayload);   // PATCH Request

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe('OK');

    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    console.log(body);

    expect(body).toHaveProperty('firstname');
    expect(body).toHaveProperty('lastname');
    expect(body).toHaveProperty('totalprice');
    expect(body).toHaveProperty('depositpaid');
    expect(body).toHaveProperty('bookingdates');
    expect(body).toHaveProperty('additionalneeds');

    expect(body.firstname).toBe(patchPayload.firstname);         // Updated values
    expect(body.additionalneeds).toBe(patchPayload.additionalneeds);
    expect(body.lastname).toBe(bookingPayload.lastname);           // Rest unchanged values
    expect(body.totalprice).toBe(bookingPayload.totalprice);
    expect(body.depositpaid).toBe(bookingPayload.depositpaid);
    expect(body.bookingdates.checkin).toBe(bookingPayload.bookingdates.checkin);
    expect(body.bookingdates.checkout).toBe(bookingPayload.bookingdates.checkout);
});

    test('Test6 DELETE Booking', async () => {
    const createResponse = await bookingApi.createBooking(bookingPayload);
    expect(createResponse.status()).toBe(200);
    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;

    const authResponse = await bookingApi.createToken(authPayload);
    expect(authResponse.status()).toBe(200);
    const authBody = await authResponse.json();
    const token = authBody.token;

    const deleteResponse = await bookingApi.deleteBooking(bookingId,token);   // DELETE Booking

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.ok()).toBeTruthy();
    expect(deleteResponse.statusText()).toBe('Created');

    const deleteBody = await deleteResponse.text();
    expect(deleteBody).toBe('Created');

    const getResponse = await bookingApi.getBookingById(bookingId);    // Verify Booking is Deleted
    expect(getResponse.status()).toBe(404);
    const getBody = await getResponse.text();
    expect(getBody).toContain('Not Found');

});
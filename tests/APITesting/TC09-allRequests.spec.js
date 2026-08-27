const { test, expect, request } = require('@playwright/test');
const { BookingApi } = require('../../pages/ApiDemo/bookingApi');
const { authPayload } = require('../../utils/testData');

const {
    assertSuccessResponse,
    assertBookingStructure,
    assertBookingDataTypes,
    assertBookingData,
    assertCreateBookingResponse,
    assertDeletedResponse,
    assertNotFoundResponse
} = require('../../utils/apiAssertions');

let bookingApi;
let token;

const BookingId = 2;

const bookingPayload = {
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

const updatePayload = {
    firstname: 'Krishna',
    lastname: 'Yadav',
    totalprice: 800,
    depositpaid: false,
    bookingdates: {
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

test.describe('Booking API', () => {

    test.beforeAll(async () => {

        const apiRequest = await request.newContext();

        const authApi = new BookingApi(apiRequest);

        const authResponse = await authApi.createToken(authPayload);

        expect(authResponse.status()).toBe(200);
        expect(authResponse.ok()).toBeTruthy();

        const authBody = await authResponse.json();

        expect(authBody).toHaveProperty('token');

        token = authBody.token;

        console.log('Authentication token generated successfully');

        await apiRequest.dispose();
    });


    test('TC01: GET all bookings', async () => {

        const response = await bookingApi.getAllBookings();

        assertSuccessResponse(response);

        const body = await response.json();

        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('bookingid');
    });


    test('TC02: GET booking by Id', async () => {

        const response =await bookingApi.getBookingById(BookingId);

        assertSuccessResponse(response);

        const body = await response.json();

        console.log(body);

        assertBookingStructure(body);
        assertBookingDataTypes(body);
    });


    test('TC03: POST create booking', async () => {

        const response = await bookingApi.createBooking(bookingPayload);

        assertSuccessResponse(response);

        const body = await response.json();

        console.log(body);

        assertCreateBookingResponse(body,bookingPayload);
    });


    test('TC04: PUT update booking', async () => {

        // Create booking
        const createResponse = await bookingApi.createBooking(bookingPayload);

        assertSuccessResponse(createResponse);

        const createBody = await createResponse.json();
        const bookingId = createBody.bookingid;


        // PUT update
        const response = await bookingApi.updateBooking(bookingId,token,updatePayload);

        assertSuccessResponse(response);

        const body = await response.json();

        console.log(body);

        assertBookingStructure(body);
        assertBookingDataTypes(body);
        assertBookingData(body, updatePayload);
    });


    test('TC05: PATCH partial update booking', async () => {

        // Create booking
        const createResponse = await bookingApi.createBooking(bookingPayload);

        assertSuccessResponse(createResponse);

        const createBody = await createResponse.json();
        const bookingId = createBody.bookingid;


        // PATCH update
        const response = await bookingApi.partialUpdateBooking(bookingId,token,patchPayload);

        assertSuccessResponse(response);

        const body = await response.json();

        console.log(body);

        assertBookingStructure(body);


        // Validate updated fields
        expect(body.firstname).toBe(patchPayload.firstname);

        expect(body.additionalneeds).toBe(patchPayload.additionalneeds);


        // Validate unchanged fields
        expect(body.lastname).toBe(bookingPayload.lastname);

        expect(body.totalprice).toBe(bookingPayload.totalprice);

        expect(body.depositpaid).toBe(bookingPayload.depositpaid);

        expect(body.bookingdates.checkin).toBe(bookingPayload.bookingdates.checkin);

        expect(body.bookingdates.checkout).toBe(bookingPayload.bookingdates.checkout);
    });


    test('TC06: DELETE booking', async () => {

        // Create booking
        const createResponse = await bookingApi.createBooking(bookingPayload);

        assertSuccessResponse(createResponse);

        const createBody = await createResponse.json();
        const bookingId = createBody.bookingid;


        // DELETE booking
        const deleteResponse =await bookingApi.deleteBooking( bookingId,token);

        assertDeletedResponse(deleteResponse);

        const deleteBody = await deleteResponse.text();

        expect(deleteBody).toBe('Created');


        // Verify booking is deleted
        const getResponse = await bookingApi.getBookingById(bookingId);

        assertNotFoundResponse(getResponse);

        const getBody = await getResponse.text();

        expect(getBody).toContain('Not Found');
    });

});
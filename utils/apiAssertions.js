const { expect } = require('@playwright/test');

function assertSuccessResponse(response, status = 200) {
    expect(response.status()).toBe(status);
    expect(response.ok()).toBeTruthy();
    expect(response.statusText()).toBe('OK');
    expect(response.headers()['content-type']).toContain('application/json');
}

function assertBookingStructure(booking) {
    expect(booking).toHaveProperty('firstname');
    expect(booking).toHaveProperty('lastname');
    expect(booking).toHaveProperty('totalprice');
    expect(booking).toHaveProperty('depositpaid');
    expect(booking).toHaveProperty('bookingdates');
    expect(booking).toHaveProperty('additionalneeds');

    expect(booking.bookingdates).toHaveProperty('checkin');
    expect(booking.bookingdates).toHaveProperty('checkout');
}

function assertBookingData(actual, expected) {
    expect(actual.firstname).toBe(expected.firstname);
    expect(actual.lastname).toBe(expected.lastname);
    expect(actual.totalprice).toBe(expected.totalprice);
    expect(actual.depositpaid).toBe(expected.depositpaid);
    expect(actual.additionalneeds).toBe(expected.additionalneeds);

    expect(actual.bookingdates.checkin)
        .toBe(expected.bookingdates.checkin);

    expect(actual.bookingdates.checkout)
        .toBe(expected.bookingdates.checkout);
}

function assertBookingDataTypes(booking) {
    expect(typeof booking.firstname).toBe('string');
    expect(typeof booking.lastname).toBe('string');
    expect(typeof booking.totalprice).toBe('number');
    expect(typeof booking.depositpaid).toBe('boolean');
    expect(typeof booking.additionalneeds).toBe('string');
}

function assertCreateBookingResponse(body, expectedPayload) {
    expect(body).toHaveProperty('bookingid');
    expect(typeof body.bookingid).toBe('number');
    expect(body.bookingid).toBeGreaterThan(0);

    expect(body).toHaveProperty('booking');

    assertBookingStructure(body.booking);
    assertBookingData(body.booking, expectedPayload);
}

function assertErrorStatus(response, expectedStatus) {
    expect(response.status()).toBe(expectedStatus);
}

module.exports = {
    assertSuccessResponse,
    assertBookingStructure,
    assertBookingData,
    assertBookingDataTypes,
    assertCreateBookingResponse,
    assertErrorStatus
};
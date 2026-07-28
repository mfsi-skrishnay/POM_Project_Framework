# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITesting\postTestCases.spec.js >> Test2 POST Negative case - missing required field
- Location: tests\APITesting\postTestCases.spec.js:59:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 500
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { BookingApi } = require('../../pages/ApiDemo/bookingApi');
  3   | const { authPayload } = require('../../utils/testData');
  4   | 
  5   | let bookingApi;
  6   | 
  7   | const validBookingPayload = {
  8   |     firstname: 'Sam',
  9   |     lastname: 'Muller',
  10  |     totalprice: 500,
  11  |     depositpaid: true,
  12  |     bookingdates: {
  13  |         checkin: '2026-07-22',
  14  |         checkout: '2026-07-30'
  15  |     },
  16  |     additionalneeds: 'Breakfast'
  17  | };
  18  | 
  19  | test.beforeEach(async ({ request }) => {
  20  |     bookingApi = new BookingApi(request);
  21  | });
  22  | 
  23  | test('Test1 POST create booking - positive scenario', async () => {
  24  |     const response = await bookingApi.createBooking(validBookingPayload);
  25  | 
  26  |     expect(response.status()).toBe(200);
  27  |     expect(response.ok()).toBeTruthy();
  28  |     expect(response.statusText()).toBe('OK');
  29  | 
  30  |     expect(response.headers()['content-type']).toContain('application/json');
  31  | 
  32  |     const body = await response.json();
  33  |     console.log(body);
  34  | 
  35  |     expect(body).toHaveProperty('bookingid');
  36  |     expect(typeof body.bookingid).toBe('number');
  37  |     expect(body.bookingid).toBeGreaterThan(0);
  38  | 
  39  |     expect(body).toHaveProperty('booking');
  40  |     expect(body.booking).toHaveProperty('firstname');
  41  |     expect(body.booking).toHaveProperty('lastname');
  42  |     expect(body.booking).toHaveProperty('totalprice');
  43  |     expect(body.booking).toHaveProperty('depositpaid');
  44  |     expect(body.booking).toHaveProperty('bookingdates');
  45  |     expect(body.booking).toHaveProperty('additionalneeds');
  46  |     expect(body.booking.bookingdates).toHaveProperty('checkin');
  47  |     expect(body.booking.bookingdates).toHaveProperty('checkout');
  48  | 
  49  |     expect(body.booking.firstname).toBe(validBookingPayload.firstname);
  50  |     expect(body.booking.lastname).toBe(validBookingPayload.lastname);
  51  |     expect(body.booking.totalprice).toBe(validBookingPayload.totalprice);
  52  |     expect(body.booking.depositpaid).toBe(validBookingPayload.depositpaid);
  53  |     expect(body.booking.additionalneeds).toBe(validBookingPayload.additionalneeds);
  54  | 
  55  |     expect(body.booking.bookingdates.checkin).toBe(validBookingPayload.bookingdates.checkin);
  56  |     expect(body.booking.bookingdates.checkout).toBe(validBookingPayload.bookingdates.checkout);
  57  | });
  58  | 
  59  | test('Test2 POST Negative case - missing required field', async () => {
  60  |     const payload = { ...validBookingPayload };
  61  |     delete payload.firstname;
  62  |     const response = await bookingApi.createBooking(payload);
  63  | 
  64  | try {
> 65  |     expect(response.status()).toBe(400);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  66  | }
  67  | catch (error) {
  68  |     console.error('Missing required field validation failed');
  69  |     console.error(`Expected status : 400`);
  70  |     console.error(`Actual status   : ${response.status()}`);
  71  |     throw error;
  72  | }
  73  | });
  74  | 
  75  | test('Test3 POST negative case - invalid data type', async () => {
  76  |     const payload = { ...validBookingPayload, totalprice: "Five Hundred" };
  77  |     const response = await bookingApi.createBooking(payload);
  78  | 
  79  |     try {
  80  |         expect(response.status()).toBe(400);
  81  |     }
  82  |     catch (error) {
  83  |         console.error('Invalid data type validation failed');
  84  |         console.error(`Expected status : 400`);
  85  |         console.error(`Actual status   : ${response.status()}`);
  86  |         throw error;
  87  |     }
  88  | });
  89  | 
  90  | test('Test4 POST negative case - Empty request body', async () => {
  91  |     const response = await bookingApi.createBooking({});
  92  |     try {
  93  |         expect(response.status()).toBe(400);
  94  |     }
  95  |     catch (error) {
  96  |         console.error('Empty request body validation failed');
  97  |         console.error(`Expected status : 400`);
  98  |         console.error(`Actual status   : ${response.status()}`);
  99  |         throw error;
  100 |     }
  101 | });
  102 | 
  103 | test('Test5 Edge case - empty lastname', async () => {
  104 |     const payload = { ...validBookingPayload, lastname: '' };
  105 |     const response = await bookingApi.createBooking(payload);
  106 | 
  107 |     try {
  108 |         expect(response.status()).toBe(400);
  109 |     }
  110 |     catch (error) {
  111 |         console.error('Empty lastname validation failed');
  112 |         console.error(`Expected status : 400`);
  113 |         console.error(`Actual status   : ${response.status()}`);
  114 |         throw error;
  115 |     }
  116 | });
  117 | 
  118 | test('Test6 Edge case - negative total price', async () => {
  119 |     const payload = { ...validBookingPayload, totalprice: -100 };
  120 |     const response = await bookingApi.createBooking(payload);
  121 | 
  122 |     try {
  123 |         expect(response.status()).toBe(400);
  124 |     }
  125 |     catch (error) {
  126 |         console.error('Negative total price validation failed');
  127 |         console.error(`Expected status : 400`);
  128 |         console.error(`Actual status   : ${response.status()}`);
  129 |         throw error;
  130 |     }
  131 | });
  132 | 
  133 | test('Test7 Edge case - special characters in first name', async () => {
  134 |     const payload = { ...validBookingPayload, firstname: '@#$%^&*()_+' };
  135 |     const response = await bookingApi.createBooking(payload);
  136 | 
  137 |     try {
  138 |         expect(response.status()).toBe(400);
  139 |     }
  140 |     catch (error) {
  141 |         console.error('Special characters validation failed');
  142 |         console.error(`Expected status : 400`);
  143 |         console.error(`Actual status   : ${response.status()}`);
  144 |         throw error;
  145 |     }
  146 | });
```
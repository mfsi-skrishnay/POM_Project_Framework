# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITesting\allRequests.spec.js >> Test2 GET booking by Id
- Location: tests\APITesting\allRequests.spec.js:56:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "additionalneeds"
Received path: []

Received value: {"bookingdates": {"checkin": "2025-02-10", "checkout": "2025-12-31"}, "depositpaid": true, "firstname": "Mark", "lastname": "Jackson", "totalprice": 426}
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { BookingApi } = require('../../pages/ApiDemo/bookingApi');
  3   | const { authPayload } = require('../../utils/testData');
  4   | 
  5   | let bookingApi;
  6   | const BookingId=2;
  7   | const bookingPayload = {
  8   |         firstname: 'Sam',
  9   |         lastname: 'Muller',
  10  |         totalprice: 500,
  11  |         depositpaid: true,
  12  |         bookingdates: 
  13  |         {
  14  |             checkin: '2026-07-22',
  15  |             checkout: '2026-07-30'
  16  |         },
  17  |         additionalneeds: 'Breakfast'
  18  |     };
  19  | 
  20  |     const updatePayload = {
  21  |         firstname: 'Krishna',
  22  |         lastname: 'Yadav',
  23  |         totalprice: 800,
  24  |         depositpaid: false,
  25  |         bookingdates: 
  26  |         {
  27  |             checkin: '2026-08-01',
  28  |             checkout: '2026-08-10'
  29  |         },
  30  |         additionalneeds: 'Lunch'
  31  |     };
  32  | 
  33  |     const patchPayload = {
  34  |         firstname: 'Thomas',
  35  |         additionalneeds: 'Dinner'
  36  |     };
  37  | 
  38  | test.beforeEach(async ({ request }) => {
  39  |     bookingApi = new BookingApi(request);
  40  | });
  41  | 
  42  |     test('Test1 GET all bookings', async () => {
  43  |         const response = await bookingApi.getAllBookings();
  44  |         expect(response.status()).toBe(200);
  45  |         expect(response.ok()).toBeTruthy();
  46  |         expect(response.statusText()).toBe('OK');
  47  |         expect(response.headers()['content-type']).toContain('application/json');
  48  | 
  49  |         const body = await response.json();
  50  | 
  51  |         expect(body.length).toBeGreaterThan(0);
  52  |         expect(body[0]).toHaveProperty('bookingid');
  53  | 
  54  |     });
  55  | 
  56  |     test('Test2 GET booking by Id', async () => {
  57  |         const response = await bookingApi.getBookingById(BookingId);
  58  |         expect(response.status()).toBe(200);
  59  |         expect(response.ok()).toBeTruthy();
  60  |         expect(response.headers()['content-type']).toContain('application/json');
  61  |         
  62  |         const body = await response.json();
  63  | 
  64  |         console.log(body)
  65  |         expect(body).toHaveProperty('firstname');
  66  |         expect(body).toHaveProperty('lastname');
  67  |         expect(body).toHaveProperty('totalprice');
  68  |         expect(body).toHaveProperty('depositpaid');
  69  |         expect(body).toHaveProperty('bookingdates');
> 70  |         expect(body).toHaveProperty('additionalneeds');
      |                      ^ Error: expect(received).toHaveProperty(path)
  71  |         expect(body.bookingdates).toHaveProperty('checkin');
  72  |         expect(body.bookingdates).toHaveProperty('checkout');
  73  | 
  74  |         expect(typeof body.firstname).toBe('string');
  75  |         expect(typeof body.lastname).toBe('string');
  76  |         expect(typeof body.totalprice).toBe('number');
  77  |         expect(typeof body.depositpaid).toBe('boolean');
  78  |         expect(typeof body.additionalneeds).toBe('string');
  79  | 
  80  |     });
  81  | 
  82  |     test('Test3 POST create booking', async () => {
  83  |     const response = await bookingApi.createBooking(bookingPayload);
  84  |     expect(response.status()).toBe(200);
  85  |     expect(response.ok()).toBeTruthy();
  86  |     expect(response.statusText()).toBe('OK');
  87  | 
  88  |     expect(response.headers()['content-type']).toContain('application/json');
  89  |     const body = await response.json();
  90  |     console.log(body);
  91  | 
  92  |     expect(body).toHaveProperty('bookingid');
  93  |     expect(typeof body.bookingid).toBe('number');
  94  |     expect(body.bookingid).toBeGreaterThan(0);
  95  | 
  96  |     expect(body).toHaveProperty('booking');
  97  |     expect(body.booking).toHaveProperty('firstname');
  98  |     expect(body.booking).toHaveProperty('lastname');
  99  |     expect(body.booking).toHaveProperty('totalprice');
  100 |     expect(body.booking).toHaveProperty('depositpaid');
  101 |     expect(body.booking).toHaveProperty('bookingdates');
  102 |     expect(body.booking).toHaveProperty('additionalneeds');
  103 |     expect(body.booking.bookingdates).toHaveProperty('checkin');
  104 |     expect(body.booking.bookingdates).toHaveProperty('checkout');
  105 | 
  106 |     // Value Validations
  107 |     expect(body.booking.firstname).toBe(bookingPayload.firstname);
  108 |     expect(body.booking.lastname).toBe(bookingPayload.lastname);
  109 |     expect(body.booking.totalprice).toBe(bookingPayload.totalprice);
  110 |     expect(body.booking.depositpaid).toBe(bookingPayload.depositpaid);
  111 |     expect(body.booking.additionalneeds).toBe(bookingPayload.additionalneeds);
  112 |     expect(body.booking.bookingdates.checkin).toBe(bookingPayload.bookingdates.checkin);
  113 |     expect(body.booking.bookingdates.checkout).toBe(bookingPayload.bookingdates.checkout);
  114 |     });
  115 | 
  116 |     test('Test4 PUT update booking', async () => {
  117 |     const createResponse = await bookingApi.createBooking(bookingPayload);
  118 |     expect(createResponse.status()).toBe(200);
  119 |     const createBody = await createResponse.json();
  120 |     const bookingId = createBody.bookingid;
  121 | 
  122 |     const authResponse = await bookingApi.createToken(authPayload);     // Generate Token
  123 |     expect(authResponse.status()).toBe(200);
  124 |     expect(authResponse.ok()).toBeTruthy();
  125 |     const authBody = await authResponse.json();
  126 |     const token = authBody.token;
  127 | 
  128 |     const response = await bookingApi.updateBooking(bookingId,token,updatePayload); //PUT request
  129 | 
  130 |     expect(response.status()).toBe(200);
  131 |     expect(response.ok()).toBeTruthy();
  132 |     expect(response.statusText()).toBe('OK');
  133 |     expect(response.headers()['content-type']).toContain('application/json');
  134 | 
  135 |     const body = await response.json();
  136 |     console.log(body);
  137 | 
  138 |     expect(body).toHaveProperty('firstname');
  139 |     expect(body).toHaveProperty('lastname');
  140 |     expect(body).toHaveProperty('totalprice');
  141 |     expect(body).toHaveProperty('depositpaid');
  142 |     expect(body).toHaveProperty('bookingdates');
  143 |     expect(body).toHaveProperty('additionalneeds');
  144 |     expect(body.bookingdates).toHaveProperty('checkin');
  145 |     expect(body.bookingdates).toHaveProperty('checkout');
  146 | 
  147 |     expect(typeof body.firstname).toBe('string');
  148 |     expect(typeof body.lastname).toBe('string');
  149 |     expect(typeof body.totalprice).toBe('number');
  150 |     expect(typeof body.depositpaid).toBe('boolean');
  151 |     expect(typeof body.additionalneeds).toBe('string');
  152 | 
  153 |     expect(body.firstname).toBe(updatePayload.firstname);
  154 |     expect(body.lastname).toBe(updatePayload.lastname);
  155 |     expect(body.totalprice).toBe(updatePayload.totalprice);
  156 |     expect(body.depositpaid).toBe(updatePayload.depositpaid);
  157 |     expect(body.additionalneeds).toBe(updatePayload.additionalneeds);
  158 | 
  159 |     expect(body.bookingdates.checkin).toBe(updatePayload.bookingdates.checkin);
  160 |     expect(body.bookingdates.checkout).toBe(updatePayload.bookingdates.checkout);
  161 | });
  162 | 
  163 | 
  164 |     test('Test5 PATCH partial update booking', async () => {
  165 |     const createResponse = await bookingApi.createBooking(bookingPayload);
  166 |     expect(createResponse.status()).toBe(200);
  167 |     const createBody = await createResponse.json();
  168 |     const bookingId = createBody.bookingid;
  169 | 
  170 |     const authResponse = await bookingApi.createToken(authPayload);   // Generate Token
```
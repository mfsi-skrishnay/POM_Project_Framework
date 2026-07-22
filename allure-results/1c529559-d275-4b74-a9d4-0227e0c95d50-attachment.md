# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITesting\allRequests.spec.js >> Test 1 GET request
- Location: tests\APITesting\allRequests.spec.js:4:1

# Error details

```
TypeError: body.statusText is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { demoURL } = require('../../playwright.config.js');
  3  | 
  4  | test("Test 1 GET request", async({request})=>{
  5  |     const response = await request.get(`${demoURL}/products/1`);
  6  |     expect(response.status()).toBe(200);
  7  |     const body = await response.json();
> 8  |     const statusText= await body.statusText();
     |                                  ^ TypeError: body.statusText is not a function
  9  |     console.log(statusText);
  10 |     console.log(body)
  11 |     expect(body.id).toBe(1);
  12 |     expect(body).toHaveProperty('title','Essence Mascara Lash Princess');
  13 | 
  14 | })
  15 | 
  16 | 
```
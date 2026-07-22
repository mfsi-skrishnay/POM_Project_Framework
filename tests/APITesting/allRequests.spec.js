const { test, expect } = require('@playwright/test');
const { demoURL } = require('../../playwright.config.js');

test("Test 1 GET request", async({request})=>{
    const response = await request.get(`${demoURL}/products/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    const statusText= await body.statusText;
    console.log(statusText);
    console.log(body)
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title','Essence Mascara Lash Princess');

})

test("Test 2 PUT request", async({request})=>{
    const response = await request.get(`${demoURL}/products/1`);
    

})




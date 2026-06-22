
import {test,expect} from '@playwright/test';

test('Book a Movie ticket',async({page})=>{
await page.goto('https://www.pvrcinemas.com/');
// selet city
 await page.locator('//span[text()="Chennai"]').click();
// movie
await page.locator('//span[text()="Select Movie"]').click();
await page.locator('(//span[text()="DISCLOSURE DAY"])[3]').click();
// select date
//await page.locator('//span[text()="Select Date"]').click();
await page.locator('//span[starts-with(text(),"Today")]').click();
// cinema
//await page.locator('//span[text()="Select Cinema"]').click();
await page.locator('//span[text()="PVR, Grand Mall, Velachery"]').click();
// Timimgs
//await page.locator('//span[text()="Select Timing"]').click();
await page.locator("//span[contains(text(),'03:30 PM')]").click();
// book the tiket
await page.locator('//button[@type="submit"]').click();
//popup
await page.locator('//button[text()="Accept"]').click();
//book seat
//await page.locator('#PE.PRIME|C:15').click();
await page.locator('#PE\\.PRIME\\|C\\:15').click(); // .->\\. and |->\\|
await page.locator('//button[text()="Proceed"]').click();
await page.waitForTimeout(2000);
await expect(page.getByRole('heading', {name: 'DISCLOSURE DAY (ENGLISH WITH ENGLISH SUBTITLE) (UA 13+)'})).toBeVisible();
})
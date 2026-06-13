import {test,expect} from '@playwright/test';

test('Book a Movie ticket',async({page})=>{
await page.goto('https://www.decathlon.in/');

await expect(page).toHaveTitle(/Sportswear/i);// app title assertion// i->regualr expression which mataches all combination
await page.locator('//input[@type="search"]').click();
//await page.locator('//input[@type="search"]').fill('Sports');
//await page.locator('//input[@type="search"]').click();
const searchbox= page.getByPlaceholder('Search for 60+ sports and 6,000+ products');// click search boc 
      await searchbox.fill('Sports');
      await searchbox.press('Enter');
await expect(page).toHaveURL(/decathlon.in/i); // assert the page url
await page.locator('//span[@data-test-id="title:Sport"]').click();//filter sport
await page.locator('(//input[@data-test-id="filter-checkbox-sport_pratice_en-Running"])').check();// check the ruuning checkbox after filter sport 
await page.locator('//span[@data-test-id="title:Gender"]').click();//filter Gender
await page.locator('(//input[@data-test-id="filter-checkbox-gender_id_en-MEN"])').click();// check the men checkbox after filter gender 
await page.locator('//span[@data-test-id="title:Size"]').click();//filter size
await page.locator('(//input[@data-test-id="filter-checkbox-indian_size-10.5"])').click();// check the size  checkbox after filter size 
await page.locator('//button[@data-test-id="sort-bar-desktop:dropdown-button"]').click();//select option from dropdwon
await page.getByRole('option',{name:'Highest discount'}).click();// check tht highest dropdown
// price
//await page.locator('(//div[@data-test-id="filter-sidebar-desktop:slider-thumb-min-inner"])').fill('699');
//await page.locator('(//div[@data-test-id="filter-sidebar-desktop:slider-thumb-max"])').fill('5000');
await page.locator('//img[@data-test-id="product-card-product-image:img"]').first().click(); //select first product
 await page.locator('(//button[@data-test-id="pdp-size-option-button-10.5"])').click();
await page.getByRole('button',{name:'Add to cart'}).click(); // add prod to cart
await page.locator('a[href="/checkout/cart"]').click(); // checout


})

//Assignment: 1 Create Lead

import { test, expect } from '@playwright/test';

test('saleforce assign', async ({ page }) => {
    // 1. Navigate and Login
    await page.goto('https://login.salesforce.com/?locale=in'); 
    await expect(page).toHaveTitle('Login | Salesforce'); 
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#rememberUn').check();
    const boolean = await page.locator('#rememberUn').isChecked(); 
    console.log('Is Remember Me checked:', boolean);
    // 2. Click Login and wait for the Dashboard home page to finish loading completely
    await page.locator('#Login').click(); 
    await page.waitForURL('**/lightning/**'); 
    // 3. Open App Launcher (Salesforce requires you to click the 9-dot menu grid first)
    const appLauncher = page.getByRole('button', { name: 'App Launcher' });
    await appLauncher.waitFor({ state: 'visible' });
    await appLauncher.click();
   // 4. Click the "Sales" item inside the App Launcher dropdown menu
// Using a locator that targets the text node directly bypasses the custom element wrapper
  const salesLink = page.getByRole('option', { name: 'Sales', exact: true });
   await salesLink.click();
    // 5. Navigate to the Leads tab
    const leadsTab = page.getByRole('link', { name: 'Leads', exact: true });
    await leadsTab.waitFor({ state: 'visible' });
    await leadsTab.click();
    // 6. Click "New" to open the creation dialog form
    const newButton = page.getByRole('button', { name: 'New' });
    await newButton.waitFor({ state: 'visible' });
    await newButton.click();
    // 7. Handle the custom Salesforce Combobox dropdown cleanly
    const salutationCombobox = page.getByRole('combobox', { name: 'Salutation' });
    await salutationCombobox.waitFor({ state: 'visible' });
    await salutationCombobox.click();
  
    // Click the specific dropdown item panel element
    await page.locator('lightning-base-combobox-item[data-value="Mr."]').click();

    // 8. Populate form fields
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Rathod');
    await page.getByRole('textbox', { name: 'Company' }).fill('ABHcompany');
    
    // 9. Save and Assert the new record exists
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    await expect(page.getByText('Mr. Rathod', { exact: true })).toBeVisible();
});

// Assignment: 2 Edit Lead

test("assign2", async({page})=>{
  await page.goto("https://leaftaps.com/opentaps/control/login")
  await page.locator(`//input[@name='USERNAME']`).fill('democsr')
  const labelContent =await page.locator(`//p[@class='top']/label`).innerText()
  console.log(labelContent)
  await page.locator(`(//input[@class='inputLogin'])[2]`).fill('crmsfa')
  await page.locator(`//input[contains(@class,'Submit')]`).click()
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Create Lead"]').click();
  await page.locator('//input[@name="companyName"]').fill('xyzcompany');
  await page.locator('//input[@id="createLeadForm_firstName"]').fill('Akshata');
  await expect(page.locator('//input[@id="createLeadForm_firstName"]')).toHaveValue('Akshata');
  await page.locator('//input[@id="createLeadForm_lastName"]').fill('Rathod');
  await page.selectOption('//select[@name="dataSourceId"]', {index:4});
  await page.selectOption('//select[@name="marketingCampaignId"]', {label:'Automobile'});
  await page.locator('//input[@id="createLeadForm_birthDate"]').fill('12/5/2026')
  await page.selectOption('//select[@id="createLeadForm_ownershipEnumId"]' ,{value:'OWN_SCORP'});
  await page.locator('//input[@name="submitButton"]').click();// click lead button
  await expect(page.locator('//span[@id="viewLead_firstName_sp"]')).toContainText('Aksh');  // assertion 
  await expect(page).toHaveTitle(/View Lead/);// asset
await page.locator('//a[text()="Edit"]').click(); // edit company name
await page.locator('//input[@id="updateLeadForm_companyName"]').fill('ABHGroupcom'); // edit the company name n update
 await page.getByRole('button',{name:'Update'}).click();
 
})


// Assignment :3 
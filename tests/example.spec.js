const { test, expect } = require('@playwright/test');

test('Addition works', async ({ page }) => {

    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: 'Cal' }).click();

    await expect(page.locator('#result')).toHaveText('3');

});

// const { test, expect } = require('@playwright/test');

test('Subtraction works', async ({ page }) => {
  
    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '−' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: 'Cal' }).click();

    await expect(page.locator('#result')).toHaveText('2');

});

// const { test, expect } = require('@playwright/test');

test('Multiplication works', async ({ page }) => {
  
    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '4' }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.getByRole('button', { name: '3' }).click();
    await page.getByRole('button', { name: 'Cal' }).click();

    await expect(page.locator('#result')).toHaveText('12');

});

// const { test, expect } = require('@playwright/test');

test('Division works', async ({ page }) => {
  
    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '8' }).click();
    await page.getByRole('button', { name: '÷' }).click();
    await page.getByRole('button', { name: '2' }).click();
    await page.getByRole('button', { name: 'Cal' }).click();

    await expect(page.locator('#result')).toHaveText('4');

});
// const { test, expect } = require('@playwright/test');

test('Percentage works', async ({ page }) => {
  
    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: '%' }).click();
    await page.getByRole('button', { name: 'Cal' }).click();

    await expect(page.locator('#result')).toHaveText('0.05');

}); 

//const { test, expect } = require('@playwright/test');

test('Clear works', async ({ page }) => {
  
    await page.goto('http://localhost:5500');

    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: 'All Clear' }).click();

    await expect(page.locator("#result")).toHaveText("0");

});   

// const { test, expect } = require('@playwright/test');

// test('Decimal works', async ({ page }) => {
  
//     await page.goto('http://localhost:5500');

//     await page.getByRole('button', { name: '5' }).click();
//     await page.getByRole('button', { name: '.' }).click();
//     await page.getByRole('button', { name: '2' }).click();
//     await page.getByRole('button', { name: 'Cal' }).click();
    
//     await expect(page.locator('#result')).toHaveText('5.2');    

// });


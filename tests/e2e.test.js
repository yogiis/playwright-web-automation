import { test } from '@playwright/test';
import LoginPage from '../page-objects/login-page';
import DashboardPage from '../page-objects/dashboard-page';
import CartPage from '../page-objects/cart-page';

test.describe.serial('@e2e Web test online shopping', () => {
  test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickSubmitButton();
  });

  test('User some select item', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    for (let i = 0; i < 4; i++) {
      await dashboardPage.selectRandomItem();    
    }
  });

  test('Full Flow Crate Transaction', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    for (let i = 0; i < 5; i++) {
      await dashboardPage.selectRandomItem();    
    }
    await dashboardPage.conitnueToCart();
    await cartPage.removeItemProduct();
    await cartPage.chekcoutItemProduct();
    await cartPage.fillFirstName("Yogi");
    await cartPage.fillLastName("Is Ariyanto");
    await cartPage.fillPostalCode("55432");
    await cartPage.clickToContinue();
    await cartPage.finishTransaction();
  });
});

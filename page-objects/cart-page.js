class CartPage {
  constructor(page) {
    this.page = page;
    this.removeButton = (index) => page.locator(`(//button[contains(@class, "cart_button")])[${index}]`);
    this.checkoutButton = page.locator('button[data-test="checkout"]');
    this.firstNameInput = page.locator('input[data-test="firstName"]');
    this.lastNameInput = page.locator('input[data-test="lastName"]');
    this.postalCodeInput = page.locator('input[data-test="postalCode"]');
    this.continue = page.locator('input[data-test="continue"]');
    this.finishhButton = page.locator('button[data-test="finish"]');
  }

  async removeItemProduct() {
      await this.removeButton(1).click();
  }

  async chekcoutItemProduct() {
    await this.checkoutButton.click();
  }

  async fillFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async fillPostalCode(postalCode) {
    await this.postalCodeInput.fill(postalCode);
  }

  async clickToContinue() {
    await this.continue.click();
  }
  async finishTransaction() {
    await this.finishhButton.click();
  }
}
module.exports = CartPage;

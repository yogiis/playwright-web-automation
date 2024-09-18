class DashboardPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = (index) => page.locator(`(//button[contains(@class, "btn_inventory")])[${index}]`);
    this.cartButton = page.locator('span[data-test="shopping-cart-badge"]');
  }

  async selectRandomItem() {
    const itemCount = 5;
    const randomIndex = Math.floor(Math.random() * itemCount) + 1;

    await this.addToCartButton(randomIndex).click();
  }

  async conitnueToCart() {
    await this.cartButton.click();
  }
}
module.exports = DashboardPage;

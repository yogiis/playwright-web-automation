class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[data-test="username"]');
    this.passwordInput = page.locator('input[data-test="password"]');
    this.submitButton = page.locator('input[data-test="login-button"]'); 
  }
  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }
  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }
  
  async clickSubmitButton() {
    await this.submitButton.click();
  }
}

module.exports = LoginPage;

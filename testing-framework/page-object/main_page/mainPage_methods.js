const mainPageElements = require("./mainPage_elements");
const BasePage = require("../../components/base-page-helper");
const waitHelper = require("../../components/wait-helper");
const Logger = require("../../components/logger-helper");
const expectationHelper = require("../../components/expectation-helper");
const webdriver = require("selenium-webdriver");

class contact_methods extends BasePage {
  async typeUserName(userNameData) {
    Logger.subStep(`Insert ${userNameData} in "userName" field`);
    await this.sendText(mainPageElements.elements.userName, userNameData);
    return userNameData;
  }

  async typeEmailAddress(contactEmail) {
    Logger.subStep(`Insert ${contactEmail} in "Email" field`);
    await this.sendText(mainPageElements.elements.email, contactEmail);
    return contactEmail;
  }

  async typePassword(passwordData) {
    Logger.subStep(`Insert ${passwordData} in "Password" field`);
    await this.sendText(mainPageElements.elements.password, passwordData);
  }

  async typeConfirmPassword(passwordData) {
    Logger.subStep(`Insert ${passwordData} in "Confirm Password" field`);
    await this.sendText(mainPageElements.elements.confirmPassword, passwordData);
  }

  async clickOnAgreeTerms() {
    await waitHelper.waitElementDisplayed(mainPageElements.elements.confirmPassword);
    const confirmPasswordInput = mainPageElements.elements.confirmPassword;
    await this.click(confirmPasswordInput);
    confirmPasswordInput.sendKeys(webdriver.Key.TAB);
    await waitHelper.wait(3);
    this.pressKey(webdriver.Key.SPACE);
  }

  async clickOnCreateAcctBtn() {
    mainPageElements.elements.htmlBody.sendKeys(webdriver.Key.CONTROL, webdriver.Key.END);
    await waitHelper.wait(2000);
    await waitHelper.waitElementClickable(
      mainPageElements.elements.btnCreateAccount
    );
    await this.click(mainPageElements.elements.btnCreateAccount);
  }

  async clickOnElement(webElement) {
    await waitHelper.waitElementDisplayed(webElement);
    await this.click(webElement);
  }

  async verifyValueInField(webElement, text) {
    await expectationHelper.verifyElementContainsValue(webElement, text);
  }

  async verifyElementDisplayed(element) {
    await expectationHelper.verifyElementDisplayed(element);
  }

  async verifyElementIsNotDisplayed(element) {
    await expectationHelper.verifyElementIsNotDisplayed(element);
  }
}

module.exports = new contact_methods();

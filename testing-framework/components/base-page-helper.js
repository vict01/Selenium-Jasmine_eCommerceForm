var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

const CommonConstant = require("../page-object/common-page/common-page.constant");
const ExpectationHelper = require("../components/expectation-helper");
const Logger = require("../components/logger-helper");
const WaitHelper = require("../components/wait-helper");
const { waitForPageToLoad } = require("../components/wait-helper");

class BasePage {
  constructor() {
    global.driver = driver;
  }

  async navigateToApplication(applicationUrl=CommonConstant.commonData.applicationUrl) {
    await driver.get(applicationUrl);
    await driver.manage().window().maximize();
    await WaitHelper.waitForPageToLoad();
  }

  async click(element) {
    await WaitHelper.implicitWait(
      CommonConstant.commonData.implicitWaitDefaultTimeout
    );
    await element.click();
  }

  async doubleClick(element) {    
    await WaitHelper.implicitWait(
      CommonConstant.commonData.implicitWaitDefaultTimeout
    );
    const action = driver.actions({async:true});
    await action.doubleClick(element).perform();
  }

  async enterText(element, text) {    
    await WaitHelper.implicitWait(
      CommonConstant.commonData.implicitWaitDefaultTimeout
    );
    const actions = driver.actions({async:true});
    await actions.click(element).sendKeys(text).perform();
  }

  async sendText(element, text) {
    await WaitHelper.waitElementDisplayed(element);
    await element.sendKeys(text);
  }

  async pressKey(key) {
    const element = driver.switchTo().activeElement();
    await element.sendKeys(key);
  }

  async verifyUrl(url) {
    Logger.subVerification(`The current URL should contain ${url}`);
    await ExpectationHelper.verifyTextContainedInUrl(url);
  }

  async getElementValue(element) {
    let elementValue;
    await WaitHelper.waitElementDisplayed(element);
    await element
      .getAttribute("data-initial-value")
      .then(function (currentValue) {
        elementValue = currentValue;
      });
    return elementValue;
  }

  async sendTextWithoutPassingElement(text) {
    const element = driver.switchTo().activeElement();
    await element.sendKeys(text);
  }

  async pressENTER() {
    const element = driver.switchTo().activeElement();
    await element.sendKeys(webdriver.Key.ENTER);
  }

  async acceptAlert() {
    await waitForPageToLoad();
    return driver.switchTo().alert().accept();
  }

}
module.exports = BasePage;
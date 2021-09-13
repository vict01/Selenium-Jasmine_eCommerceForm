const mainPageMethod = require("../page-object/main_page/mainPage_methods");
const mainPageElements = require("../page-object/main_page/mainPage_elements");
const {testData: data} = require("../page-object/main_page/mainPage_constants");
const Logger = require("../components/logger-helper");
const suites = require("../components/test-suites");
const WaitHelper = require("../components/wait-helper");

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.negativeTest, () => {
  beforeAll(async () => {
    await mainPageMethod.navigateToApplication();
  });

  afterAll(async () => {
    await WaitHelper.wait(3000);
  });

  it("Fill out the registration form without completing aptcha verification", async () => {
    Logger.testCaseId("001");
    Logger.stepNumber(1);
    Logger.step("Typing username");
    const userName = await mainPageMethod.typeUserName(data.userNameData);
    Logger.verification(
      "The inserted username should be contained in username field"
    );
    await mainPageMethod.verifyValueInField(
      mainPageElements.elements.userName,
      userName
    );

    Logger.stepNumber(2);
    Logger.step("Typing email");
    const email = await mainPageMethod.typeEmailAddress(data.contactEmail);
    Logger.verification(
      "The inserted email address should be contained in Email field"
    );
    await mainPageMethod.verifyValueInField(mainPageElements.elements.email, email);

    Logger.stepNumber(3);
    Logger.step("Typing password");
    await mainPageMethod.typePassword(data.passwordData);
    Logger.verification("The password field should be valid");
    await mainPageMethod.verifyElementIsNotDisplayed(
      mainPageElements.elements.invalidPassword
    );

    Logger.stepNumber(4);
    Logger.step("Typing confirm password");
    await mainPageMethod.typeConfirmPassword(data.passwordData);
    Logger.verification("The confirm password field should be valid");
    await mainPageMethod.verifyElementIsNotDisplayed(
      mainPageElements.elements.invalidPassword2
    );

    Logger.stepNumber(5);
    Logger.step("Click on agree the terms and Conditions check");
    await mainPageMethod.clickOnAgreeTerms();
    Logger.verification(
        "The terms and Conditions should be accepted"
      );
    await mainPageMethod.verifyElementIsNotDisplayed(
      mainPageElements.elements.agreeTermsAlert
    );

    Logger.stepNumber(6);
    Logger.step(
      "Click on 'create an account' button without filling in captcha verification"
    );
    await mainPageMethod.clickOnCreateAcctBtn();
    Logger.verification(
      "The Invalid captcha alert should be appear and prevent from submitting the form"
    );
    await mainPageMethod.verifyElementDisplayed(
      mainPageElements.elements.emptyCaptchaAlert
    );
  });

});
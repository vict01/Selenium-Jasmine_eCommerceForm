const contactMethod = require('../page-object/Contact_Page/contact_methods');
const {testData: data, attributes: attr} = require('../page-object/Contact_Page/contact_constants');
const Logger = require('../components/logger-helper');
const suites = require('../components/test-suites');
const PageHelper = require('../components/page-helper');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.negativeTestCase, () => {

    beforeAll(async () => {
        await contactMethod.navigateToApplication();
    });

    afterAll(async () => {
        await PageHelper.closeBrowser();
    });

    it('Send message indicating only the email', async () => {
        Logger.testCaseId('002');

        Logger.stepNumber(1);
        Logger.step('Typing email');
        const email = await contactMethod.typeEmailAddress(data.contactEmail);
        Logger.verification('The inserted email address should be contained in Email field');
        await contactMethod.verifyTextInEmailField(email);

        Logger.stepNumber(2);
        Logger.step('Click on Send Message Button');
        await contactMethod.clickOnSendMessage();

        Logger.stepNumber(3);
        Logger.step('Last step: Validating error message due to lack of message text');
        Logger.verification('Error message should appear');
        await contactMethod.verifyErrorMessageBlankLbl();

    });
});

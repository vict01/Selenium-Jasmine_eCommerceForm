const contactMethod = require('../page-object/Contact_Page/contact_methods');
const {testData: data, attributes: attr} = require('../page-object/Contact_Page/contact_constants');
const Logger = require('../components/logger-helper');
const suites = require('../components/test-suites');
const WaitHelper = require('../components/wait-helper');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.happyPath, () => {
 
    beforeAll(async () => {
        await contactMethod.navigateToApplication();
    });

    afterAll(async () => {
        await WaitHelper.wait(3000);
    });

    it('Send message populating all required fields', async () => {
        Logger.testCaseId('001');

        Logger.stepNumber(1);
        Logger.step('Selecting type of subject option');
        await contactMethod.selectCategory(attr.id.ddlElement, '1');
        Logger.verification('The selected type of subject should be contained in subject field');
        await contactMethod.verifyDdlSelected('1');

        Logger.stepNumber(2);
        Logger.step('Typing email');
        const email = await contactMethod.typeEmailAddress(data.contactEmail);
        Logger.verification('The inserted email address should be contained in Email field');
        await contactMethod.verifyTextInEmailField(email);

        Logger.stepNumber(3);
        Logger.step('Typing text message');
        const message = await contactMethod.typeTextMessage(data.texmMessage4Service);
        Logger.verification('The inserted  text message should be contained in message area');
        await contactMethod.verifyTextMessageArea(message);

        Logger.stepNumber(4);
        Logger.step('Click on Send Message Button');
        await contactMethod.clickOnSendMessage();

        Logger.stepNumber(5);
        Logger.step('Last step: Validating the Message sent successfully due to proper form completion');
        Logger.verification('Successful send message, should appear');
        await contactMethod.verifySuccessfulMessageLbl();

    });
});

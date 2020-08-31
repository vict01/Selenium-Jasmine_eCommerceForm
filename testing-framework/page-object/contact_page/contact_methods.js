const contactPage = require('./contact_elements');
const BasePage = require('../../components/base-page-helper');
const WaitHelper = require('../../components/wait-helper');
const Logger = require('../../components/logger-helper');
const ExpectationHelper = require('../../components/expectation-helper');

class contact_methods extends BasePage {
   
    async selectCategory (ddlElement, index) {
        Logger.subStep(`Insert ${ddlElement} in "Dropdown list" field`);
        await this.click(contactPage.elements.ddlElement);
        await this.click(contactPage.elements.getDdlOptionByIndex(index));
        return ddlElement;
    }

    async typeEmailAddress (contactEmail) {
        Logger.subStep(`Insert ${contactEmail} in "Email" field`);
        await this.sendText(contactPage.elements.email, contactEmail);
        return contactEmail;
    }  

    async typeTextMessage (Messsage) {
        Logger.subStep(`Insert ${Messsage} in "text area" field`);
        await this.sendText(contactPage.elements.MsgElement, Messsage);
        return Messsage;
    } 

    async clickOnSendMessage() {
        Logger.subStep('Click on Next button below email field');
        await WaitHelper.waitElementDisplayed(contactPage.elements.sendBtn);
        await this.click(contactPage.elements.sendBtn);
    }

    async verifyDdlSelected(index) {
        Logger.subVerification(`The selected option should be displayed in dropdown list`);
        const choose = await contactPage.elements.getDdlOptionByIndex(index);      
        await ExpectationHelper.verifyElementDisplayed(choose);
    }

    async verifyTextInEmailField(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(contactPage.elements.email, text);
    }

    async verifyTextMessageArea(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(contactPage.elements.MsgElement, text);
    }

    async verifySuccessfulMessageLbl() {
        Logger.subVerification('Successful Messsage sent should be displayed');
        await WaitHelper.waitElementDisplayed(contactPage.elements.successfulMessageSent);
        await ExpectationHelper.verifyElementDisplayed(contactPage.elements.successfulMessageSent);
    }

    async verifyErrorMessageBlankLbl() {
        Logger.subVerification('Error Messsage in blank should be displayed');
        await WaitHelper.waitElementDisplayed(contactPage.elements.errorMessageInBlank);
        await ExpectationHelper.verifyElementDisplayed(contactPage.elements.errorMessageInBlank);
    }

}

module.exports = new contact_methods();
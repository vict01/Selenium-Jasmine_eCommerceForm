const WaitHelper = require('../components/wait-helper');
const CommonConstant = require('../page-object/common-page/common-page.constant');
const HTMLHelper = require('../components/html-helper');

class ExpectationHelper {
    async verifyTextContainedInUrl(text) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        driver.getCurrentUrl().then(function(currentUrl) {
            expect(currentUrl).toContain(text)
        });
    }

    async verifyElementContainsText(element, text) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.getText().then(function(currentText) {
            expect(currentText).toContain(text)
        });
    }

    async verifyElementContainsValue(element, val) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.getAttribute(HTMLHelper.attributes.value).then(function(currentText) {
            expect(currentText).toContain(val)
        });
    }
 
    async verifyElementDisplayed(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.isDisplayed().then(function(isDisplayed) {
            expect(isDisplayed).toBeTrue();
        });
    }

    async verifyElementIsNotDisplayed(element) {
        await WaitHelper.implicitWait(CommonConstant.commonData.implicitWaitDefaultTimeout);
        element.isDisplayed().then(function(isDisplayed) {
            expect(isDisplayed).toBeFalse();
        });
    }

    async verifyStringAreEquals(stringOne, stringTwo) {
        expect(stringOne).toEqual(stringTwo)
    }

}
module.exports = new ExpectationHelper();
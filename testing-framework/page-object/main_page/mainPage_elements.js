const webdriver = require('selenium-webdriver');
const { attributes: attr } = require('./mainPage_constants');
const basePage = require('../../components/base-page-helper');
const By = webdriver.By;

class contact_elements extends basePage {
    get elements() {
        return {
            get userName() {
                return driver.findElement(By.id(attr.id.userName));
            },
            get email() {
                return driver.findElement(By.id(attr.id.email));
            },
            get password() {
                return driver.findElement(By.id(attr.id.password));
            },
            get confirmPassword() {
                return driver.findElement(By.id(attr.id.confirmPassword));
            },
            get validPassword() {
                return driver.findElement(By.css(attr.css.validPasswordAlert));
            },
            get invalidPassword() {
                return driver.findElement(By.id(attr.id.invalidPasswordLbl));
            },
            get invalidPassword2() {
                return driver.findElement(By.id(attr.id.invalidPasswordLbl2));
            },    
            get agreeTermsCheck() {
                return driver.findElement(By.id(attr.id.agreeTermsCheck));
            }, 
            get btnCreateAccount() {
                return driver.findElement(By.id(attr.id.btnCreateAccount));
            },
            get agreeTermsAlert() {
                return driver.findElement(By.id(attr.id.agreeTermsAlert));
            }, 
            get emptyCaptchaAlert() {
                return driver.findElement(By.css(attr.css.emptyCaptcha));
            }, 
            get htmlBody() {
                return driver.findElement(By.css(attr.css.htmlBody));
            }      
        }
    }
}

module.exports = new contact_elements();

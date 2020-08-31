const webdriver = require('selenium-webdriver');
const { elementNames: eNames, attributes: attr } = require('../contact_page/contact_constants');
const basePage = require('../../components/base-page-helper');
const { tags,  attributes: htmlAttr } = require('../../components/html-helper');
const By = webdriver.By;

class contact_elements extends basePage {
    get elements() {
        return {
            get ddlElement() {
                return driver.findElement(By.id(attr.id.ddlElement));
            },
            getDdlOptionByIndex(index){
                return driver.findElement(By.css(`#${attr.id.ddlElement} ${tags.option}[${htmlAttr.value}="${index}"]`));
            },
            get email() {
                return driver.findElement(By.id(attr.id.email));
            },
            get MsgElement() {
                return driver.findElement(By.id(attr.id.MsgElement));
            },
            get sendBtn() {
                return driver.findElement(By.id(attr.id.sendBtn));
            },     
            get successfulMessageSent() {
                return driver.findElement(By.css(`.${attr.class.alert}.${attr.class.alertSuccess}`));
            },      
            get errorMessageInBlank() {
                return driver.findElement(By.css(`.${attr.class.alert} ${tags.li}`));
            }           
     
        }
    }
}

module.exports = new contact_elements();

import { browser, element, by, ElementArrayFinder, ElementFinder, ExpectedConditions } from 'protractor';

let EC = ExpectedConditions;

export class ContactPage {

    menuItems: ElementArrayFinder;
    pageSections: ElementArrayFinder;

    constructor () {
    this.menuItems = element.all(by.css('ul.nav > li > a'));
    this.pageSections = element.all(by.css('h3'))
    }

    async get() {
    await browser.get('/jak-to-zrobic-w-js/contact');
    };

    async getTitle () {
    return await browser.getTitle();
    };

    async clickMenuAtIdx (idx) {
    await this.getMenuTextAtIdx(idx).click();
    };

    private getMenuTextAtIdx (idx) {
    return this.menuItems.get(idx);
    };
    
    async sendMessage(name: string, email: string, message: string) {
    await element(by.css('#name.input-xxlarge')).sendKeys(name);
    await element(by.css('#email.input-xxlarge')).sendKeys(email);
    await element(by.css('#content.input-xxlarge')).sendKeys(message);
    await element(by.css('.btn.test')).click();
    }

    async getMessageSentText() {
        const messageAlert = element(by.css('h4.alert.alert-success'));
        await browser.wait(EC.presenceOf(messageAlert), 6000);
        return messageAlert.getText();
    }

    async getPageItemsText() {
        return this.pageSections.map(item => item.getText());
    }

};
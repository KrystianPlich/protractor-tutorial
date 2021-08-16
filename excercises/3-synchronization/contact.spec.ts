import { browser, element, by, ExpectedConditions } from 'protractor';

const EC = ExpectedConditions;

describe('Protractor Workshop app', function() {

	beforeEach(async function () {
		await browser.get("jak-to-zrobic-w-js/contact.html");
	});

	it('should display text "Your message has been sent." when user sends a message', async function(){
		const expectedMessage = "Your message has been sent.";
		const expectedElement = element(by.css('h4.alert.alert-success'));
		const sampleText = "Test";
		await element(by.css('input#name')).sendKeys(sampleText);
		await element(by.css('input#email')).sendKeys(sampleText);
		await element(by.css('textarea#content')).sendKeys(sampleText);
		await element(by.css('button.btn.test')).click();
		await browser.wait(EC.visibilityOf(expectedElement), 6000);
		expect(await expectedElement.getText()).toBe(expectedMessage);
	});

});

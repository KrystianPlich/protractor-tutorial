import { browser, element, by } from 'protractor'

describe('Protractor workshop app | Admin page', function () {

	beforeEach(async function () {
        await browser.get(browser.baseUrl + '/signin.html')
	});

	it('should have admin page with title Protractor workshop | Admin', async function () {
		await element(by.id('usernamesignin')).sendKeys(browser.params.username);
		await element(by.id('passwordsignin')).sendKeys(browser.params.password);
		await element(by.id('admin')).click();
		var pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Admin");
	});

	// Zadanie: Podziel specyfikację na dwi w zalażności od testowanej strony, przenieś otwarcie strony 
	// do funkcji before, wykorzystaj parametry baseUrl

});
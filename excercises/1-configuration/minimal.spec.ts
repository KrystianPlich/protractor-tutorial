import { browser } from 'protractor'

describe('Protractor workshop app', function () {

	beforeEach(async function () {
		await browser.get(browser.baseUrl);
	});

	it('should have home page with title Protractor workshop | Home', async function () {
		const pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});
	// Zadanie: Podziel specyfikację na dwi w zalażności od testowanej strony, przenieś otwarcie strony 
	// do funkcji before, wykorzystaj parametry baseUrl

});

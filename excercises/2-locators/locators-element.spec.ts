import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', async function () {
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(await footerCopyright.getText()).toContain(expectedHTML)
	});


	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	it('should have "Example headline 1" carousel item after entering site', async function () {
		//Zadaie : Zlokalizuj i sprawdź element wykorzystując lokatory css
		let firstItem = element(by.css('.active.item .container .span6 h1'));
		const expectedHeadline = 'Example Headline 1';
		expect(await firstItem.getText()).toBe(expectedHeadline);
	});

	it('should have correct feature header', async function () {
		//Zadaie : Zlokalizuj i sprawdź element wykorzystując lokator XPath
		let featureHeader = element(by.xpath('//div[contains(@class, "span12")]/h1'));
		const expectedHeadline = "At vero eos et accusamus et iusto odio dignissimos";
		expect(await featureHeader.getText()).toBe(expectedHeadline);
	});
	
});

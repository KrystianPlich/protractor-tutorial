import { browser, element, by , ExpectedConditions} from 'protractor';

const EC = ExpectedConditions;

describe('Protractor Workshop app', function() {

	beforeEach(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	it('should hide GDRP popup after clicking Accept', async function(){
		const popupButton = element(by.css('.cookieButton a'));
		const popupContainer = element(by.css('.cookieConsentContainer'));
		const expectedStyle = "opacity: -0.02; display: none;";
		popupButton.click();
		popupButton.click();
		await browser.wait(EC.invisibilityOf(popupContainer), 2000);
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', async function(){
		const expectedHeader = 'Example Headline 2'
		const activeCarouselHeader = element(by.css('div.active h1'));
		const transitionElement = element(by.css('.item.next.left'))
		const nextButton = element(by.css('a.right'));
		await nextButton.click();
		//TODO: Replace sleep with ExpectedCondition 
		await browser.wait(EC.presenceOf(transitionElement),1000);
		await browser.wait(EC.stalenessOf(transitionElement),1000)
		expect(await activeCarouselHeader.getText()).toEqual(expectedHeader)
	});
	
	it('should display drop down after clicking on About menu item', async function(){
		const expectedElement = await element(by.css('li.dropdown.open'));
		const aboutButton = element(by.css('a.dropdown-toggle'));
		await aboutButton.click();
		await browser.wait(EC.visibilityOf(expectedElement), 1000);
	});

});

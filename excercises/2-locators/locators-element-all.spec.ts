import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', async function () {
		const menuText = ["Home", "About", "Services", "Blog", "Contact"];
		var menuItems = element.all(by.css('ul.nav > li > a'));
		expect(await menuItems.get(0).getText()).toEqual(menuText[0]);
	});

	/**
	* Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	* to see how map function can be used to verify content of multiple elements
	*/

	it('should have Feature A, Feature B, Feature C sections ...', async function () {
		const expectedText = ["Feature A", "Feature B", "Feature C"];
		let featureText = await element.all(by.css('.row.feature-box .span4 h2')).map((item) => item.getText());
		expect(featureText).toEqual(expectedText);
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	it('should route to "Blog" pages after selecting link', async function () {
		//TODO: User filter function to verify feature names
		const expectedFeature = "Blog";
		const expectedTitle = "Protractor workshop | Blog";
		await element.all(by.css('ul.nav li a')).filter(async (item) => await item.getText() == expectedFeature).click();
		let pageTitle = await browser.getTitle();
		expect(pageTitle).toBe(expectedTitle);
	});

});

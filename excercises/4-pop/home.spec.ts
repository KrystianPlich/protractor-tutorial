import { HomePage } from './pages';

describe('Protractor Workshop app', function() {

	const homePage: HomePage = new HomePage();
	beforeEach(async function () {
		await homePage.get();
	});

	it('hould have home page with title Protractor workshop | Home', async function(){
		expect(await homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have Feature A, Feature B, Feature C sections ...', async function () {
		//TODO: add new function to homePage class and implement the test
		const expectedFeatures = ['Feature A', 'Feature B', 'Feature C'];
		expect(await homePage.getFeatureText()).toEqual(expectedFeatures);
	});

	it('should have Contact menu item that redirects to correct link to Contact us page', async function(){
		//TODO: implement menu class and implement the test
		const expectedTitle = "Protractor workshop | Contact Us"
		await homePage.clickMenuAtIdx(4);
		let pageTitle = homePage.getTitle();
		expect(pageTitle).toBe(expectedTitle);
	});

});

import { ContactPage } from './pages';

describe('Protractor Workshop app', function() {

	const contactPage: ContactPage = new ContactPage();
	beforeEach(async function () {
		await contactPage.get();
	});

	it('should display text "Your message has been sent." when user sends a message', async function(){
		const expectedMessage = 'Your message has been sent.';
		await contactPage.sendMessage('Test', 'SomeEmail', 'Content');
		const actualMessage = await contactPage.getMessageSentText();
		expect(actualMessage).toBe(expectedMessage);
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', async function(){
		const expectedSections = ['Get in Touch', "Address"];
		const actualSections = await contactPage.getPageItemsText();
		expect(actualSections).toEqual(expectedSections);
	});

});

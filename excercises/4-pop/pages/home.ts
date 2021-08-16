import { browser, element, by, ElementArrayFinder } from 'protractor';

export class HomePage {

  menuItems: ElementArrayFinder;
  featureItems: ElementArrayFinder;

  constructor () {
    this.menuItems = element.all(by.css('ul.nav > li > a'))
    this.featureItems = element.all(by.css('.row.feature-box .span4 h2'))
  }
  async get() {
    await browser.get('/jak-to-zrobic-w-js');
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
  
  async getFeatureText() {
    return this.featureItems.map((item) => item.getText());
  }
};

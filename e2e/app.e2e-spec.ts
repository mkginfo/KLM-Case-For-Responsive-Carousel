import { AssignmentPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('assignment App', () => {
  let page: AssignmentPage;

  beforeEach(() => {
    page = new AssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    browser.get('src/assets/slidedata.json')
    expect(page.getParagraphText()).toEqual('KLM Case Assignment');
  });
});

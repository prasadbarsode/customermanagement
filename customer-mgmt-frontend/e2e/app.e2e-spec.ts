import { AppPage } from './app.po';

describe('customer-mgmt-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
    expect(page.getParagraphText()).toContain('Small Customer Details')
  });
});

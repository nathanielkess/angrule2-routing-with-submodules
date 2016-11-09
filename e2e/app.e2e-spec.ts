import { RouterTestsPage } from './app.po';

describe('router-tests App', function() {
  let page: RouterTestsPage;

  beforeEach(() => {
    page = new RouterTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

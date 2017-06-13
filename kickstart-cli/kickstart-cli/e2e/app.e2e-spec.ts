import { KickstartCliPage } from './app.po';

describe('kickstart-cli App', function() {
  let page: KickstartCliPage;

  beforeEach(() => {
    page = new KickstartCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

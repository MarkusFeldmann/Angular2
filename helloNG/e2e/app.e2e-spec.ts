import { HelloNGPage } from './app.po';

describe('hello-ng App', function() {
  let page: HelloNGPage;

  beforeEach(() => {
    page = new HelloNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { NoizPage } from './app.po';

describe('noiz App', function() {
  let page: NoizPage;

  beforeEach(() => {
    page = new NoizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

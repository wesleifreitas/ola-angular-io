import { OlaAngularIoPage } from './app.po';

describe('ola-angular-io App', () => {
  let page: OlaAngularIoPage;

  beforeEach(() => {
    page = new OlaAngularIoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

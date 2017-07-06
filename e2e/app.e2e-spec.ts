import { AngularmCrudPage } from './app.po';

describe('angularm-crud App', () => {
  let page: AngularmCrudPage;

  beforeEach(() => {
    page = new AngularmCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

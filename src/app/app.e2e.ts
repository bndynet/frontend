import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should have a title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Frontend';
    expect(subject).toEqual(result);
  });

  it('should have app tag', async () => {
    const subject = await element(by.tagName('app')).isPresent();
    const result  = true;
    expect(subject).toEqual(result);
  });
});

import { browser, by, element } from 'protractor';
import 'tslib';

describe('App', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/#/home');
  });

  it('should have a title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Frontend';
    expect(subject).toEqual(result);
  });
});

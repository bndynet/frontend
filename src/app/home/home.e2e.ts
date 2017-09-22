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

  it('should have `your content here` x-large', async () => {
    const subject = await element(by.css('[x-large]')).getText();
    const result  = 'Your Content Here';
    expect(subject).toEqual(result);
  });

});

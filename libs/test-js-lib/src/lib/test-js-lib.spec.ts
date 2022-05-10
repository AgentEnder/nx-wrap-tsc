import { testJsLib } from './test-js-lib';

describe('testJsLib', () => {
  it('should work', () => {
    expect(testJsLib()).toEqual('test-js-lib');
  });
});

import '@testing-library/jest-dom';

// The test environment has no real media playback, so give it a working stand-in.
beforeEach(() => {
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue();
  jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
});

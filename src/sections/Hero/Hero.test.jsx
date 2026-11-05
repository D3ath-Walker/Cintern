import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GOOGLE_FORM_URL } from '../../data/siteLinks';
import Hero from './Hero';

const getVideo = () => screen.getByLabelText('ChiPi Technologies talent pipeline introduction');

afterEach(() => {
  delete window.matchMedia;
});

test('starts the video muted', () => {
  render(<Hero />);

  expect(getVideo().muted).toBe(true);
  expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
});

test('does not start the video by itself when reduced motion is on', () => {
  window.matchMedia = jest.fn(() => ({ matches: true }));

  render(<Hero />);

  expect(window.HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
  expect(screen.getByText('▶')).toBeInTheDocument();
});

test('shows a play icon only while the video is paused', () => {
  render(<Hero />);

  expect(screen.getByText('▶')).toBeInTheDocument();

  fireEvent.play(getVideo());
  expect(screen.queryByText('▶')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Pause hero video' })).toBeInTheDocument();

  fireEvent.pause(getVideo());
  expect(screen.getByText('▶')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Play hero video' })).toBeInTheDocument();
});

test('turns the sound on and off', () => {
  render(<Hero />);

  userEvent.click(screen.getByRole('button', { name: 'Unmute hero video' }));
  expect(getVideo().muted).toBe(false);

  userEvent.click(screen.getByRole('button', { name: 'Mute hero video' }));
  expect(getVideo().muted).toBe(true);
});

test('sends the main button to the hiring form', () => {
  render(<Hero />);

  const link = screen.getByRole('link', { name: /share your hiring requirement/i });
  expect(link).toHaveAttribute('href', GOOGLE_FORM_URL);
  expect(link).toHaveAttribute('rel', 'noreferrer');
});

describe('when the video scrolls out of view', () => {
  let reportVisibility;
  let paused = true;

  beforeEach(() => {
    window.IntersectionObserver = class {
      constructor(callback) {
        reportVisibility = (ratio) => act(() => callback([{ isIntersecting: ratio > 0, intersectionRatio: ratio }]));
      }

      observe() {}

      disconnect() {}
    };
    Object.defineProperty(window.HTMLMediaElement.prototype, 'paused', { configurable: true, get: () => paused });
    window.HTMLMediaElement.prototype.play.mockImplementation(async () => {
      paused = false;
    });
    window.HTMLMediaElement.prototype.pause.mockImplementation(() => {
      paused = true;
    });
  });

  afterEach(() => {
    delete window.IntersectionObserver;
    delete window.HTMLMediaElement.prototype.paused;
    paused = true;
  });

  test('resumes after a gradual scroll, which reports leaving view twice', () => {
    render(<Hero />);
    reportVisibility(1);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);

    reportVisibility(0.2);
    reportVisibility(0);
    expect(paused).toBe(true);

    reportVisibility(1);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(2);
  });

  test('stays paused on return if the visitor paused it', () => {
    render(<Hero />);
    reportVisibility(1);

    userEvent.click(screen.getByRole('button', { name: 'Play hero video' }));
    expect(paused).toBe(true);

    reportVisibility(0);
    reportVisibility(1);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
  });
});

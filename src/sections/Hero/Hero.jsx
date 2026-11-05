import { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import { GOOGLE_FORM_URL } from '../../data/siteLinks';
import sideImage from '../../assets/images/side1.webp';
import './Hero.css';

const TAGLINE = 'Save Time, Cut Cost, Find Talent Worth the Most.';

const checks = [
  'Built around your roles',
  'Screened against agreed criteria',
  'Employer makes the final decision',
];

const stats = [
  ['♧', '100+', 'partner colleges & universities', 'A growing campus network'],
  ['⚙', '20+ years', 'of IT experience among trainers', 'Industry-focused expertise'],
  ['♧', '1,000s', 'of students reached', 'Through campus learning programs'],
];

export default function Hero() {
  const videoRef = useRef(null);
  const videoWasPlayingRef = useRef(false);
  const videoHasEnteredViewportRef = useRef(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!('IntersectionObserver' in window)) {
      setVideoVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      setVideoVisible(isVisible);

      if (!isVisible && !video.paused) {
        videoWasPlayingRef.current = true;
        video.pause();
      }
    }, { threshold: [0, 0.25] });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoVisible) return;

    const video = videoRef.current;
    if (!video) return;

    const shouldStartPlayback =
      !prefersReducedMotion &&
      (!videoHasEnteredViewportRef.current || videoWasPlayingRef.current);
    videoHasEnteredViewportRef.current = true;

    if (shouldStartPlayback) {
      videoWasPlayingRef.current = false;
      video.play().catch(() => setVideoPlaying(false));
    }
  }, [videoVisible, prefersReducedMotion]);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setVideoPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <>
      <section className="hero" id="top">
        <div className="hero__copy">
          <span className="hero__tagline">
            {TAGLINE}
            <span className="hero__tagline-shine" aria-hidden="true">{TAGLINE}</span>
          </span>
          <h1>
            Build the <em>right fresher talent pool</em> before you start interviewing.
          </h1>
          <p>
            A <span className="hero__claim-first">first-of-its-kind</span>{' '}
            <span className="hero__claim-bridge">Company-to-Campus</span> talent pipeline, connecting industry hiring needs
            with emerging graduate talent.
          </p>
          <div className="hero__actions">
            <Button href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Share Your Hiring Requirement <span aria-hidden="true">→</span>
            </Button>
            <Button secondary href="#how-it-works">
              See How It Works
            </Button>
          </div>
          <div className="hero__checks">
            {checks.map((check) => (
              <span key={check}><span aria-hidden="true">✓</span> <b>{check}</b></span>
            ))}
          </div>
        </div>
        <div className="hero__side-image-frame">
          <div className="hero__side-glow" aria-hidden="true"><span /></div>
          <video
            ref={videoRef}
            className="hero__side-video"
            muted={videoMuted}
            loop
            playsInline
            preload={videoVisible ? 'metadata' : 'none'}
            aria-label="ChiPi Technologies talent pipeline introduction"
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
          >
            {videoVisible && (
              <source src={`${process.env.PUBLIC_URL}/hero-video.mp4`} type="video/mp4" />
            )}
          </video>
          <img
            className={`hero__side-poster${videoPlaying ? ' hero__side-poster--hidden' : ''}`}
            src={sideImage}
            alt=""
            aria-hidden="true"
          />
          <button
            className="hero__video-toggle"
            type="button"
            aria-label={videoPlaying ? 'Pause hero video' : 'Play hero video'}
            onClick={toggleVideoPlayback}
          >
            {!videoPlaying && <span className="hero__video-play" aria-hidden="true">▶</span>}
          </button>
          <button
            className="hero__video-mute"
            type="button"
            aria-label={videoMuted ? 'Unmute hero video' : 'Mute hero video'}
            onClick={() => setVideoMuted((muted) => !muted)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 10v4h3l4 3V7l-4 3H4Z" />
              {videoMuted ? (
                <path d="m16 9 5 6m0-6-5 6" />
              ) : (
                <path d="M15 9a5 5 0 0 1 0 6m2-9a9 9 0 0 1 0 12" />
              )}
            </svg>
          </button>
        </div>
      </section>

      <div className="stats-strip">
        {stats.map(([icon, title, subtitle, note]) => (
          <div key={title}>
            <span className="stat-icon" aria-hidden="true">{icon}</span>
            <strong>
              {title}
              <small>{subtitle}</small>
              <em>{note}</em>
            </strong>
          </div>
        ))}
      </div>
    </>
  );
}

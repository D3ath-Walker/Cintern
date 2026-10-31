import { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import sideImage from '../../assets/images/side1.png';
import './Hero.css';

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
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);

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
          <span className="eyebrow hero__tagline">Save Time, Cut Cost, Find Talent Worth the Most.</span>
          <h1>
            Build the <em>right fresher<br className="desktop-break" /> talent pool</em> before you
            <br className="desktop-break" /> start interviewing.
          </h1>
          <p>
            A <span className="hero__claim-first">first-of-its-kind</span>{' '}
            <span className="hero__claim-bridge">Company-to-Campus</span> talent pipeline, connecting industry hiring needs
            with emerging graduate talent.
          </p>
          <div className="hero__actions">
            <Button>
              Share Your Hiring Requirement <span>→</span>
            </Button>
            <Button secondary href="#how-it-works">
              See How It Works
            </Button>
          </div>
          <div className="hero__checks">
            {checks.map((check) => (
              <span key={check}>✓ <b>{check}</b></span>
            ))}
          </div>
        </div>
        <div className="hero__side-image-frame">
          <video
            ref={videoRef}
            className="hero__side-video"
            autoPlay
            muted={videoMuted}
            loop
            playsInline
            preload="metadata"
            aria-label="ChiPi Technologies talent pipeline introduction"
            onPlay={() => setVideoPlaying(true)}
            onPause={() => setVideoPlaying(false)}
          >
            <source src={`${process.env.PUBLIC_URL}/hero-video.mp4`} type="video/mp4" />
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
            aria-pressed={videoPlaying}
            onClick={toggleVideoPlayback}
          />
          <button
            className="hero__video-mute"
            type="button"
            aria-label={videoMuted ? 'Unmute hero video' : 'Mute hero video'}
            aria-pressed={videoMuted}
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
            <span className="stat-icon">{icon}</span>
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

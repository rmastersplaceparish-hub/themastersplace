import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";

const SPLASH_KEY = "tmp-splash-seen";

const RAYS = Array.from({ length: 16 }, (_, i) => i);

export function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(SPLASH_KEY) === "1") return;
      window.localStorage.setItem(SPLASH_KEY, "1");
    } catch {
      // storage unavailable (private mode) — still show it once this visit
    }
    setShow(true);
    const timer = window.setTimeout(() => setShow(false), 6000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="splash-stage animate-splash-out pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <span className="splash-backdrop" />
      <span className="splash-vignette" />
      <span className="splash-arch splash-arch-left" />
      <span className="splash-arch splash-arch-right" />

      <span className="splash-curtain splash-curtain-left" />
      <span className="splash-curtain splash-curtain-right" />
      <span className="splash-horizon" />

      <div className="splash-content">
        <div className="splash-emblem">
          <span className="splash-aura" />

          <div className="splash-rays">
            {RAYS.map((i) => (
              <i key={i} style={{ transform: `rotate(${(360 / RAYS.length) * i}deg)` }} />
            ))}
          </div>

          <div className="splash-orbit splash-orbit-outer">
            <span className="splash-orbit-runner" />
            <span className="splash-orbit-runner splash-orbit-runner-trail" />
          </div>

          <div className="splash-orbit splash-orbit-middle">
            <span className="splash-orbit-runner splash-orbit-runner-secondary" />
            <span className="splash-orbit-runner splash-orbit-runner-secondary splash-orbit-runner-offset" />
          </div>

          <div className="splash-orbit splash-orbit-inner">
            <span className="splash-orbit-runner splash-orbit-runner-inner" />
          </div>

          <div className="splash-gyro">
            <span className="splash-gyro-ring splash-gyro-ring-a" />
            <span className="splash-gyro-ring splash-gyro-ring-b" />
          </div>

          <div className="splash-logo-frame">
            <span className="splash-logo-halo" />
            <img src={logo} alt="" className="splash-logo" />
          </div>
        </div>

        <div className="splash-copy text-center">
          <span className="splash-prelude">RCCG</span>
          <p className="splash-title">The Master&apos;s Place</p>
          <span className="splash-divider">
            <i />
          </span>
          <p className="splash-subtitle">Ile-Ife, Osun State</p>
          <p className="splash-tagline">
            <span>Worship</span>
            <b aria-hidden="true" />
            <span>Word</span>
            <b aria-hidden="true" />
            <span>Transformation</span>
          </p>
        </div>
      </div>

      <span className="splash-finale" />
    </div>
  );
}

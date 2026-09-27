import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";

const SPLASH_KEY = "tmp-splash-seen";

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
      className="splash-stage animate-splash-out pointer-events-none fixed inset-0 z-[100] flex h-dvh w-screen items-center justify-center overflow-hidden"
    >
      <span className="splash-curtain splash-curtain-left" />
      <span className="splash-curtain splash-curtain-right" />
      <span className="splash-horizon" />

      {/* Entire splash content is centered as one unit */}
      <div className="splash-content flex w-full flex-col items-center justify-center text-center">
        {/* Emblem */}
        <div className="splash-emblem relative mx-auto flex h-[280px] w-[280px] items-center justify-center">
          <span className="splash-aura absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="splash-orbit splash-orbit-outer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="splash-orbit-runner" />
          </div>

          <div className="splash-orbit splash-orbit-middle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="splash-orbit-runner splash-orbit-runner-secondary" />
          </div>

          <div className="splash-orbit splash-orbit-inner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="splash-orbit-runner splash-orbit-runner-inner" />
          </div>

          <div className="splash-logo-frame absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="splash-logo-halo" />

            <img
              src={logo}
              alt=""
              className="splash-logo block h-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="splash-copy mt-4 flex w-full flex-col items-center text-center">
          <span className="splash-prelude">RCCG</span>

          <p className="splash-title text-center">
            The Master&apos;s Place
          </p>

          <span className="splash-divider">
            <i />
          </span>

          <p className="splash-tagline flex items-center justify-center text-center">
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

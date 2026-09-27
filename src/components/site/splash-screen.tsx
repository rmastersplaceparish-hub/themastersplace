import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SPLASH_KEY = "tmp-splash-seen";

export function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        if (localStorage.getItem(SPLASH_KEY) === "1") return;
        localStorage.setItem(SPLASH_KEY, "1");
      }
    } catch {
      // Continue if private browsing blocks storage
    }

    setShow(true);
    const timer = setTimeout(() => setShow(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <aside
      aria-label="Welcome screen"
      role="presentation"
      className="splash-stage animate-splash-out pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <span className="splash-curtain splash-curtain-left" />
      <span className="splash-curtain splash-curtain-right" />
      <span className="splash-horizon" />

      <div className="splash-core">
        <div className="splash-emblem">
          <span className="splash-aura" />

          <div className="splash-orbit splash-orbit-outer">
            <span className="splash-orbit-runner" />
          </div>

          <div className="splash-orbit splash-orbit-middle">
            <span className="splash-orbit-runner splash-orbit-runner-secondary" />
          </div>

          <div className="splash-orbit splash-orbit-inner">
            <span className="splash-orbit-runner splash-orbit-runner-inner" />
          </div>

          <div className="splash-logo-frame">
            <span className="splash-logo-halo" />
            <img src={logo} alt="" className="splash-logo" />
          </div>
        </div>

        <div className="splash-words">
          <h1 className="splash-title">RCCG The Master&apos;s Place</h1>
          <span className="splash-divider">
            <i />
          </span>
          <p className="splash-tagline">
            <span>Worship</span>
            <b aria-hidden="true" />
            <span>Word</span>
            <b aria-hidden="true" />
            <span>Transformation</span>
          </p>
        </div>
      </div>
    </aside>
  );
}

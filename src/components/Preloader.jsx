import React, { useEffect, useState } from 'react';

export default function Preloader({ isHeroLoaded = true, onComplete }) {
  // 'text-in' -> white screen is immediately 100% solid; CIRCLE text fades in (0ms -> 800ms)
  // 'hold'    -> stays visible briefly (800ms -> 2500ms)
  // 'out'     -> entire white screen + CIRCLE text fade out to opacity 0 (2500ms -> 3400ms)
  // 'done'    -> unmounted
  const [phase, setPhase] = useState(() =>
    sessionStorage.getItem('circle_intro_seen') ? 'done' : 'text-in'
  );

  useEffect(() => {
    if (phase === 'done') {
      onComplete?.();
      return;
    }

    const holdTimer = setTimeout(() => {
      setPhase('hold');
    }, 800);

    const fadeOutTimer = setTimeout(() => {
      setPhase('out');
    }, 2500);

    const doneTimer = setTimeout(() => {
      sessionStorage.setItem('circle_intro_seen', 'true');
      setPhase('done');
      onComplete?.();
    }, 3400);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  const isFadingOut = phase === 'out';

  return (
    <>
      <style>{`
        @keyframes circleTextFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes circleOverlayFadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          backgroundColor: '#FFFFFF',
          opacity: isFadingOut ? 0 : 1,
          animation: isFadingOut
            ? 'circleOverlayFadeOut 900ms ease-in-out forwards'
            : 'none',
        }}
        className="fixed inset-0 z-50 flex items-center justify-center select-none"
      >
        <span
          style={{
            color: '#111111',
            animation: isFadingOut
              ? 'circleOverlayFadeOut 900ms ease-in-out forwards'
              : 'circleTextFadeIn 800ms ease-in-out both',
          }}
          className="font-sans text-sm sm:text-base font-medium tracking-[0.22em] uppercase"
        >
          CIRCLE
        </span>
      </div>
    </>
  );
}
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect on client, useEffect on server (avoids SSR warning)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // armed: only hide content once we KNOW JS is running and can reveal it again.
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    setArmed(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-armed={armed ? "true" : undefined}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

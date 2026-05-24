import { useCallback, useEffect, useState } from "react";

export function useScrollAnimation(threshold = 0.15, once = true) {
  const [isVisible, setIsVisible] = useState(false);
  const [el, setEl] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setEl(node);
  }, []);

  useEffect(() => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [el, threshold, once]);

  return { ref, isVisible };
}

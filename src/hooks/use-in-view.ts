import { useEffect, useRef, useState, useCallback } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  const resetVisibility = useCallback(() => {
    setIsVisible(false);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
  }, [options]);

  return { ref, isVisible, resetVisibility };
}
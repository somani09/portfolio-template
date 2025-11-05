"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /**
   * If true, the observer will stop updating once the element becomes visible.
   * Useful for lazy-load or animation triggers that only need to run once.
   * @default false
   */
  freezeOnceVisible?: boolean;
}

/**
 * Hook: useIntersectionObserver
 * Observes when an element (via ref) intersects with the root (viewport by default).
 *
 * Notes / behavior:
 * - This is a client-side only hook (file is marked `use client`).
 * - If IntersectionObserver is unavailable in the environment, the hook will be a no-op.
 * - The hook returns the latest IntersectionObserverEntry or null.
 *
 * Contract:
 * - input: React.RefObject<Element> (the element to observe)
 * - options: IntersectionObserverInit + { freezeOnceVisible?: boolean }
 * - output: IntersectionObserverEntry | null
 *
 * Edge cases considered:
 * - Missing target ref or element -> returns null and does nothing.
 * - Browser without IntersectionObserver -> no observer created.
 * - freezeOnceVisible stops further updates after element becomes visible.
 *
 * @param targetRef - React ref of the element to observe.
 * @param options - IntersectionObserver options + freezeOnceVisible flag.
 * @returns The latest IntersectionObserverEntry or null.
 */
export function useIntersectionObserver(
  targetRef: React.RefObject<Element>,
  options: UseIntersectionObserverOptions = {},
) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const frozen = freezeOnceVisible && entry?.isIntersecting;

  // capture the current node so we can use it in the effect deps array.
  const node = targetRef.current;

  useEffect(() => {
    // don't create an observer on the server or if node is missing
    if (!node || frozen) return;

    // Guard for environments without IntersectionObserver
    if (typeof IntersectionObserver === "undefined") return;

    // ensure previous observer is cleaned up before creating a new one
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      ([observedEntry]) => setEntry(observedEntry),
      { threshold, root, rootMargin },
    );

    observerRef.current.observe(node);

    return () => observerRef.current?.disconnect();
    // watch the actual observed node instead of the ref object itself so
    // the effect re-runs when the element instance changes
  }, [node, threshold, root, rootMargin, frozen]);

  return entry;
}

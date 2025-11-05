import { useLayoutEffect, useState } from "react";

/**
 * A custom hook that tracks whether a CSS media query matches the current viewport.
 *
 * This hook uses `window.matchMedia()` to evaluate a media query string and returns
 * a boolean indicating whether the query matches. The hook automatically updates
 * when the viewport changes, making it useful for responsive layouts and conditional
 * rendering based on screen size.
 *
 * @param query - A valid CSS media query string (e.g., "(min-width: 768px)", "(prefers-color-scheme: dark)")
 * @returns A boolean indicating whether the media query currently matches
 *
 * @example
 * ```tsx
 * // Check if viewport is mobile size
 * const isMobile = useMediaQuery("(max-width: 768px)");
 *
 * // Check if user prefers dark mode
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
 *
 * // Conditionally render based on screen size
 * return (
 *   <div>
 *     {isMobile ? <MobileNav /> : <DesktopNav />}
 *   </div>
 * );
 * ```
 *
 * @remarks
 * - Uses `useLayoutEffect` to synchronously update before paint, preventing layout flicker
 * - Automatically cleans up event listeners on unmount
 * - Returns `false` on the server (SSR) since `window` is not available
 * - Re-evaluates when the `query` parameter changes
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

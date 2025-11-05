import { RefObject, useEffect } from "react";

/**
 * A custom hook that detects clicks outside a referenced element and triggers a callback.
 *
 * This hook is commonly used to close dropdowns, modals, popovers, or any overlay
 * component when the user clicks outside of it. It listens for mousedown events
 * on the document and checks if the click target is outside the referenced element.
 *
 * @param ref - A React ref object pointing to the element to monitor (typically HTMLDivElement)
 * @param onClose - Optional callback function to execute when a click outside is detected
 *
 * @example
 * ```tsx
 * function Dropdown() {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const dropdownRef = useRef<HTMLDivElement>(null);
 *
 *   // Close dropdown when clicking outside
 *   useCloseOnOutsideClick(dropdownRef, () => setIsOpen(false));
 *
 *   return (
 *     <div ref={dropdownRef}>
 *       <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
 *       {isOpen && <div>Dropdown content</div>}
 *     </div>
 *   );
 * }
 * ```
 *
 * @remarks
 * - Uses `mousedown` event instead of `click` to capture the event before it bubbles
 * - Safely handles cases where `onClose` is undefined using optional chaining
 * - Automatically cleans up event listener on unmount
 * - Re-attaches listener if `ref` or `onClose` change
 * - Does nothing if `onClose` is not provided (safe no-op)
 */
export function useCloseOnOutsideClick(
  ref: RefObject<HTMLDivElement | null>,
  onClose: (() => void) | undefined,
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onClose]);
}

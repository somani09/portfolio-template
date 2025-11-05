/**
 * Barrel export file for all custom React hooks.
 *
 * This file provides a centralized import point for all hooks in the application.
 * Import hooks from this file instead of individual hook files for cleaner imports.
 *
 * @example
 * ```tsx
 * // Instead of:
 * import { useMediaQuery } from '@/hooks/useMediaQuery';
 * import { useCloseOnOutsideClick } from '@/hooks/useCloseOnOutsideClick';
 * import { useAxios } from '@/hooks/useAxios';
 *
 * // Use:
 * import { useMediaQuery, useCloseOnOutsideClick, useAxios } from '@/hooks';
 * ```
 */

export { useMediaQuery } from "./useMediaQuery";
export { useCloseOnOutsideClick } from "./useCloseOnOutsideClick";
export { useAxios } from "./useAxios";
export { useIntersectionObserver } from "./useIntersectionObserver";

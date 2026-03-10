/**
 * Fix for Node.js v25+ broken localStorage when --localstorage-file is invalid.
 * The proxy returns undefined for getItem, causing "getItem is not a function".
 * Setting to undefined lets SSR code that guards with typeof window skip localStorage.
 */
export async function register() {
  if (
    typeof globalThis.localStorage !== "undefined" &&
    typeof globalThis.localStorage.getItem !== "function"
  ) {
    (globalThis as unknown as { localStorage?: undefined }).localStorage =
      undefined;
  }
}

/**
 * Wrap a function that may throw in a try-catch block.
 *
 * @example
 * const stringify = (value: any): string | undefined => {
 *   const [error, str] = tryCatch(() => JSON.stringify(value));
 *
 *   if (error) {
 *     console.error(error.message);
 *
 *     return undefined;
 *   }
 *
 *   return str;
 * };
 */
export const tryCatch = <T>(fn: (this: void) => T): [null, T] | [Error] => {
  try {
    return [null, fn()];
  } catch (e) {
    return [new Error(e)];
  }
};

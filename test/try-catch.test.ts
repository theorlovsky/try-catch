import { tryCatch } from '../src';

describe('tryCatch', () => {
  const parseArray = (str: string): unknown[] => JSON.parse(str);

  it('should return an error if argument passed is not a function', () => {
    // @ts-expect-error
    const [error, result] = tryCatch('[]');

    expect(error).toBeInstanceOf(Error);
    expect(result).toBe(undefined);
  });

  it('should return an error if a function passed uses `this`', () => {
    function fnWithThis(this: { array: unknown[] }): unknown[] {
      this.array = parseArray('[]');

      return this.array;
    }

    // @ts-expect-error
    const [error, array] = tryCatch(fnWithThis);

    expect(error).toBeInstanceOf(Error);
    expect(array).toBe(undefined);
  });

  it('should return a result returned by the function passed', () => {
    const [error, array] = tryCatch(() => parseArray('[]'));

    expect(error).toBe(null);
    expect(array).toEqual([]);
  });

  it('should return an error if the function passed throws', () => {
    const [error, array] = tryCatch(() => parseArray('['));

    expect(error).toBeInstanceOf(Error);
    expect(array).toBe(undefined);
  });
});

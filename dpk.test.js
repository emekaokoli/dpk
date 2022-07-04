const {
  generateHash,
  isKeyTooLong,
  enforceStringDataType,
} = require('./utils');

describe('generateHash()', () => {
  it('generates a string hash', () => {
    const data = 'data';

    const result = generateHash(data);
    expect(typeof result).toStrictEqual('string');
  });

  it('generates a string hash of same length', () => {
    const data1 = '';
    const data2 = 'a'.repeat(128);
    const data3 = 'a'.repeat(1024);

    const result1 = generateHash(data1);
    const result2 = generateHash(data2);
    const result3 = generateHash(data3);

    expect(result1.length).toStrictEqual(128);
    expect(result2.length).toStrictEqual(128);
    expect(result3.length).toStrictEqual(128);
  });
});

describe('isKeyTooLong()', () => {
  it('returns true of length of data is greater than the limit', () => {
    const data = 'data';
    const limit = 2;

    const result = isKeyTooLong(data, limit);
    expect(result).toStrictEqual(true);
  });

  it('returns false of length of data is greater than the limit', () => {
    const data = 'data';
    const limit = 20;

    const result = isKeyTooLong(data, limit);
    expect(result).toStrictEqual(false);
  });
});

describe('enforceStringDataType()', () => {
  it('returns data if it is already of string type', () => {
    const data = 'data';

    const result = enforceStringDataType(data);
    expect(result).toStrictEqual(data);
  });

  it('casts data to string if it is not of string type', () => {
    const data = 123;

    const result = enforceStringDataType(data);
    expect(result).toStrictEqual('123');
  });
});

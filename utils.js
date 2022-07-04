const crypto = require('crypto');

const generateHash = (data) => {
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

const isKeyTooLong = (key, maxKeyLength) => {
  return key.length > maxKeyLength;
};

const enforceStringDataType = (data) => {
  if (typeof data === 'string') return data;

  return JSON.stringify(data);
};

module.exports = { generateHash, isKeyTooLong, enforceStringDataType };

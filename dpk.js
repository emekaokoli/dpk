const {
  generateHash,
  isKeyTooLong,
  enforceStringDataType,
} = require('./util');

const deterministicPartitionKey = (
  event,
  option = {
    TRIVIAL_PARTITION_KEY: '0',
    MAX_PARTITION_KEY_LENGTH: 256,
  }
) => {
  if (event?.partitionKey) {
    const partitionKey = enforceStringDataType(event.partitionKey);
    return isKeyTooLong(partitionKey, option.MAX_PARTITION_KEY_LENGTH)
      ? generateHash(partitionKey)
      : partitionKey;
  }

  if (event) {
    const partitionKey = generateHash(enforceStringDataType(event));
    return isKeyTooLong(partitionKey, option.MAX_PARTITION_KEY_LENGTH)
      ? generateHash(partitionKey)
      : partitionKey;
  }

  return isKeyTooLong(
    option.TRIVIAL_PARTITION_KEY,
    option.MAX_PARTITION_KEY_LENGTH
  )
    ? generateHash(option.TRIVIAL_PARTITION_KEY)
    : option.TRIVIAL_PARTITION_KEY;
};

module.exports = { deterministicPartitionKey };

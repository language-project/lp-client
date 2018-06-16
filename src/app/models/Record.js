const dataSymbol = Symbol('data');

/**
 * Record that serves as data template.
 * Inspired by Immutable.js Record.
 * 
 * @author Elden S. Park
 * @see https://github.com/facebook/immutable-js/blob/master/src/Record.js
 */
export default function Record(defaultValues, name) {
  // Initialize only once, e.g. class A extends Record(...), multiple expressions of new A() would 
  // set prototype for RecordType once.
  let hasInitialized;

  const RecordType = function (data) {
    if (data instanceof RecordType) {
      return data;
    }

    if (!(this instanceof RecordType)) {
      return new RecordType(data);
    }

    if (!hasInitialized) {
      hasInitialized = true;
    }

    this._defaultValues = defaultValues;
    this[dataSymbol] = data;
  };

  RecordType.prototype = Object.create(Record.prototype);
  RecordType.prototype.constructor = RecordType;
  RecordType.prototype.get = function (key) {
    return this._defaultValues[key] !== undefined 
      ? this[dataSymbol][key] !== undefined
        ? this[dataSymbol][key]
        : this._defaultValues[key]
      : undefined;
  }
  RecordType.prototype[IS_RECORD] = true;

  return RecordType;
};

export const IS_RECORD = '__isRecord';
export const VERSION = '__version';
Record[VERSION] = '0.1.0';

export function randomIntBetween(min = 500, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function randomNumber(digit, prefix) {
  return `${prefix ? `${prefix}-` : ''}${Math.floor(Math.random() * digit)}`;
};

export const uuid = (function() {
  let counter = 0;
  let num;
  return function (str) {
    counter += 1;
    return str ? `${str}__${counter}` : counter;
  };
})();

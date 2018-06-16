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

export const calculateTime = ((updatedTime) => {
  const timeDiff = DateDiff.inHours(new Date(updatedTime), new Date())
  return timeDiff;
});

const DateDiff = {
  inHours: ((d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();
    return parseInt((t2-t1)/(1000*60*60))+'H'
  }),

  inDays: ((d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();
    return parseInt((t2-t1)/(24*3600*1000));
  }),

  inWeeks: ((d1, d2) => {
    const t2 = d2.getTime();
    const t1 = d1.getTime();
    return parseInt((t2-t1)/(24*3600*1000*7));
  }),

  inMonths: ((d1, d2) => {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();

    return (d2M+12*d2Y)-(d1M+12*d1Y);
  }),

  inYears: ((d1, d2) => {
    return d2.getFullYear()-d1.getFullYear();
  }),
};

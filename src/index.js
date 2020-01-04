import moment from 'moment';

/*
 * Calculates the current progress of the moment against the specified time unit.
 * Halfway through the day against a unit of days would return a value of 0.5.
 *
 * @param m {moment} A valid moment object.
 * @param u {string} The unit of time to determine progress through.
 */
const progress = (m, u) => moment(m)
  .diff(
    moment(m)
      .startOf(u),
    'milliseconds',
  ) / (
    moment(m)
      .endOf(u)
      .diff(
        moment(m)
          .startOf(u),
        'milliseconds',
      )
  );

const period = Object
  .freeze(
    {
      hourly: m => progress(m, 'hour'),
      daily: m => progress(m, 'day'),
      weekly: m => progress(m, 'week'),
      monthly: m => progress(m, 'month'),
      yearly: m => progress(m, 'year'),
    },
  );

/*
 * Generates the corresponding timusoid for the specified moment.
 *
 * @param m {moment} A valid moment object.
 * @param p {string} The periodicity of the time.
 */
export const timusoid = (m = moment(), p = 'hourly') => {
  if (!moment.isMoment(m)) {
    throw new Error(
      `timeusoid: Expected valid moment, encountered ${m}.`,
    );
  } else if (Object.keys(period).indexOf(p) < 0) {
    throw new Error(
      `timusoid: Expected valid period, encountered ${p}.`,
    );
  }
  const { [p]: fn } = period;
  const v = fn(
    Object
      .freeze(
        moment(m),
      ),
  );
  return {
    sin: () => Math.sin(2 * Math.PI * v),
    cos: () => Math.cos(2 * Math.PI * v),
    tan: () => Math.tan(2 * Math.PI * v),
    progress: () => v,
  };
};

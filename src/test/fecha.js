/* eslint-disable max-len */

/**
 *
 * @param {Date} start
 * @param {Date} end
 * @return {Date}
 */
export default function generateRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


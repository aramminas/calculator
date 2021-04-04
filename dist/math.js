"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** The pow() function returns the base to the exponent power.
 * @param {number} base
 * @param {number} exponent
 */
var pow = function pow(base, exponent) {
  return Math.pow(base, exponent);
};

/** The hypotenuse() function returns the square root of the sum of squares of its arguments.
 * @param {number} adjacent
 * @param {number} opposite
 */
var hypotenuse = function hypotenuse(adjacent, opposite) {
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: Math.hypot(adjacent, opposite)
  };
};

/** The circleArea() function calculates the area of a circle according to the radius.
 * @param {number} radius
 */
var circleArea = function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
};

exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
//# sourceMappingURL=math.js.map
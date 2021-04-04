/** The pow() function returns the base to the exponent power.
 * @param {number} base
 * @param {number} exponent
 */
const pow = (base, exponent) => Math.pow(base, exponent);

/** The hypotenuse() function returns the square root of the sum of squares of its arguments.
 * @param {number} adjacent
 * @param {number} opposite
 */
const hypotenuse = (adjacent, opposite) => ({
    adjacent,
    opposite,
    hypotenuse: Math.hypot(adjacent, opposite),
});

/** The circleArea() function calculates the area of a circle according to the radius.
 * @param {number} radius
 */
const circleArea = (radius) => Math.PI * Math.pow(radius, 2);

export {
    pow,
    hypotenuse,
    circleArea,
};
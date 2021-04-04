/** Demand:
 * Calculate an area of a circle with a radius of 8
 * The hypotenuse of a triangle with sides 8 and 11
 * 5 to the power of 9
 * */

import {pow, hypotenuse, circleArea} from './math';
import {format} from './format';

/* Calculating the area of a circle */
const radius = 8;

const area = circleArea(radius);
const areaText = `circle area with radius ${radius}`;
console.log(format(areaText, area));

/* Calculating the hypotenuse */
const a = 8;
const b = 11;

const {adjacent, opposite, hypotenuse: hypo} = hypotenuse(a, b);
const sidesText = `hypotenuse ${adjacent} and ${opposite}`;
console.log(format(sidesText, hypo));

/* Calculating the power */
const base = 5;
const exponent = 9;
const powerText = `${base} to the power of ${exponent}`;

const power = pow(base, exponent);
console.log(format(powerText, power));
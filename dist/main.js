'use strict';

var _math = require('./math');

var _format = require('./format');

/* Calculating the area of a circle */
/** Demand:
 * Calculate an area of a circle with a radius of 8
 * The hypotenuse of a triangle with sides 8 and 11
 * 5 to the power of 9
 * */

var radius = 8;

var area = (0, _math.circleArea)(radius);
var areaText = 'circle area with radius ' + radius;
console.log((0, _format.format)(areaText, area));

/* Calculating the hypotenuse */
var a = 8;
var b = 11;

var _hypotenuse = (0, _math.hypotenuse)(a, b),
    adjacent = _hypotenuse.adjacent,
    opposite = _hypotenuse.opposite,
    hypo = _hypotenuse.hypotenuse;

var sidesText = 'hypotenuse ' + adjacent + ' and ' + opposite;
console.log((0, _format.format)(sidesText, hypo));

/* Calculating the power */
var base = 5;
var exponent = 9;
var powerText = base + ' to the power of ' + exponent;

var power = (0, _math.pow)(base, exponent);
console.log((0, _format.format)(powerText, power));
//# sourceMappingURL=main.js.map
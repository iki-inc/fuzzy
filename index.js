/*!
https://github.com/iki-inc/fuzzy
Fuzzy Logic of JavaScript

Version: 1.0.1
License: MIT

© 2022 IKI Inc.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).fuzzy=t()}(this,(function(){"use strict";class e{static grade(e,t,r,n=!1){if(e<=t)return n?1:0;if(e>=r)return n?0:1;const i=r-t;return n?r/i-e/i:e/i-t/i}static triangle(t,r,n,i){return t<=r||t>=i?0:t===n?1:t>r&&t<n?e.grade(t,r,n):e.grade(t,n,i,!0)}static trapezoid(t,r,n,i,d){return t<=r||t>=d?0:t>=n&&t<=i?1:t>r&&t<n?e.grade(t,r,n):e.grade(t,i,d,!0)}}return e}));

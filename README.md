# Fuzzy Logic of JavaScript

A function of where the number you want to check falls between 0 and 1 within a particular point.

## Install

```shell
$ npm install --save @iki-inc/fuzzy
# or
$ yarn add @iki-inc/fuzzy
```

## Methods

### Fuzzy.grade(value, start, end[, reverse])

return: **number**

```js
import Fuzzy from '@iki-inc/fuzzy'

const res1 = Fuzzy.grade(25, 20, 30)
console.log(res1)
//-> 0.5

const res2 = Fuzzy.grade(30, 20, 30)
console.log(res2)
//-> 1

const reverse = Fuzzy.grade(30, 20, 30, true)
console.log(reverse)
//-> 0
```

### Fuzzy.triangle(value, start, vertex, end)

return: **number**

```js
import Fuzzy from '@iki-inc/fuzzy'

const res1 = Fuzzy.triangle(10, 20, 30, 40)
console.log(res1)
//-> 0

const res2 = Fuzzy.triangle(25, 20, 30, 40)
console.log(res2)
//-> 0.5

const res3 = Fuzzy.triangle(30, 20, 30, 40)
console.log(res3)
//-> 1

const res4 = Fuzzy.triangle(45, 20, 30, 40)
console.log(res4)
//-> 0
```

### Fuzzy.trapezoid(value, start, vertexStart, vertexEnd, end)

return: **number**

```js
import Fuzzy from '@iki-inc/fuzzy'

const res1 = Fuzzy.trapezoid(10, 20, 30, 40, 50)
console.log(res1)
//-> 0

const res2 = Fuzzy.trapezoid(35, 20, 30, 40, 50)
console.log(res2)
//-> 1

const res3 = Fuzzy.trapezoid(45, 20, 30, 40, 50)
console.log(res3)
//-> 0.5

const res4 = Fuzzy.trapezoid(55, 20, 30, 40, 50)
console.log(res4)
//-> 0
```

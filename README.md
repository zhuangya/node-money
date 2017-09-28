# money

其实想法非常简单：计算的时候会被处理成数字，显示的时候可以直接按照传过去的 [accounting.js](http://openexchangerates.github.io/accounting.js/) 的格式显示。

## usage

```javascript
const m = require('@zhuangya/money');

console.log(m(42) + m(1)) // 43
console.log(m(42, '￥').toString()) // ￥42.00
```

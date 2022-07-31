"use strict";
// 型エイリアス
// type 型名 = 型
exports.__esModule = true;
function printPoint(point) {
    console.log("x\u5EA7\u6A19: ".concat(point.x));
    console.log("y\u5EA7\u6A19: ".concat(point.y));
}
printPoint({ x: 100, y: 200 });
function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
var labels = {
    topTitle: 'top title',
    topSubTitle: 'top sub title',
    topFeature1: 'top feature 1',
    topFeature2: 'top feature 2'
};
// const hoge: Label = {
//   message: 100 // エラー: 型が違う
// }
console.log(labels.topTitle);

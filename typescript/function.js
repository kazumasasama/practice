"use strict";
exports.__esModule = true;
// 引数と戻り値に対して型定義できる
// function 関数名(引数1: 型1, 引数2: 型2): 戻り値{
//   return `` // 戻り値に型を設定するとreturnは必須となる
// }
// ?を引数に付けるとオプショナル(省略可能)になる。
function sayHello(name, greeting) {
    return "".concat(greeting, " ").concat(name);
}
console.log(sayHello('Suneo')); // => undefined Suneo
console.log(sayHello('Suneo', 'Hello')); // => Hello Suneo
// 第二引数にデフォルト値を設定
function greeting(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greeting('Big G')); // => Hello Big G
console.log(greeting('Big G', 'Hey')); // => Hey Big G
function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, "\u3055\u3093");
}
printName('Doraemon', formatName); // => Doraemonさん
// アロー関数
var goodBye = function (name) { return "Goodbye ".concat(name); };
console.log(goodBye('Doraemon')); // => Goodbye Doraemon
// 関数の型
// (引数名: 引数の型) => 戻り値の型
// (x: string) => string[]
function getBirdsInfo(name) {
    return name.split(',');
}
function singBirds(birdInfo) {
    console.log(birdInfo('hato, kiji')); // => [ 'hato', ' kiji' ]
    return birdInfo('hato, kiji')[0] + ' poppo'; // => hato poppo
}
console.log(singBirds(getBirdsInfo));

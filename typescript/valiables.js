"use strict";
exports.__esModule = true;
// 変数
var num = 100; // OK
// num = 200 // constは再代入禁止
function calc(isSum) {
    var a = 100;
    var b = 500;
    var total = 0;
    if (isSum) {
        var c = 0;
        c = a + b;
        total = a + b;
        return total;
    }
    // return c // スコープ外
}
console.log(calc(true));
var age = 36;
// age = "36" // 違う型は代入できない

// ハッシュ
var user = {
    name: "Nobita",
    age: 36
};
console.log(user.name);

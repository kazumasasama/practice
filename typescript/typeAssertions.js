"use strict";
// typescriptが型を知ることができないケース
exports.__esModule = true;
// getElementByIdで返るのはHTMLElementで、HTMLCanvasElementではない
// 何のタグが返って来てるか感知していない
// const myCanvas = document.getElementById('main_canvas')
// console.log(myCanvas.width) // エラー
// 明示することで型を指定できる
// 変数 = 値 as 型
// const myCanvas2 = document.getElementById('main_canvas') as HTMLCanvasElement
// console.log(myCanvas2.width) // canvas elementが返っていることが分かっているのでOK
// TypeScriptで型アサーションが認められるのは、対象となる型に対してより具体的になる型か、または、より汎化される型に変換するケースです。このルールは保守的で、複雑なアサーションを行いたいケースでうまく実現できない可能性があります。このような場合には、まずanyに変換し、次に目的の型に変換する2段階のアサーションで実現ができます。
var response = 999;
var result = response;
console.log(typeof (result));
var hoge = 'test';
var fuga = hoge;
// コンパイル時にはnumber型として扱ってエラーが起きないですが、実行時に実際はstring型が渡されるため以下のエラーが起きます
console.log(fuga.toFixed(2));

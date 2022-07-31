// 引数と戻り値に対して型定義できる
// function 関数名(引数1: 型1, 引数2: 型2): 戻り値{
//   return `` // 戻り値に型を設定するとreturnは必須となる
// }
// ?を引数に付けるとオプショナル(省略可能)になる。
function sayHello(name: string, greeting?: string): string{
  return `${greeting} ${name}`
}
console.log(sayHello('Suneo')) // => undefined Suneo
console.log(sayHello('Suneo', 'Hello')) // => Hello Suneo

// 第二引数にデフォルト値を設定
function greeting(name: string, greeting: string = 'Hello'): string{
  return `${greeting} ${name}`
}
console.log(greeting('Big G')) // => Hello Big G
console.log(greeting('Big G', 'Hey')) // => Hey Big G

function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}
function formatName(name: string): string{
  return `${name}さん`
}
printName('Doraemon', formatName) // => Doraemonさん

// アロー関数
let goodBye = (name: string): string => `Goodbye ${name}`
console.log(goodBye('Doraemon')) // => Goodbye Doraemon

// 関数の型
// (引数名: 引数の型) => 戻り値の型
// (x: string) => string[]
function getBirdsInfo(name: string): string[]{
  return name.split(',')
}
function singBirds(birdInfo: (name: string) => string[]): string{
  console.log(birdInfo('hato, kiji')) // => [ 'hato', ' kiji' ]
  return birdInfo('hato, kiji')[0] + ' poppo' // => hato poppo
}
console.log(singBirds(getBirdsInfo))
// console.log(singBirds('suzume')) // 型が合わないのでエラー

export {};
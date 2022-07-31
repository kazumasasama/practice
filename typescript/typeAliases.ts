// 型エイリアス
// type 型名 = 型

// プリミティブ型に別名を与えるような使い方ができます。型名は大文字始まりにすることが一般的です。
type Name = string

// xとyの座標プロパティを持つPointという型エイリアスを定義
type Point = {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log(`x座標: ${point.x}`)
  console.log(`y座標: ${point.y}`)
}

printPoint({ x: 100, y: 200 })
// printPoint({ a: 100, b: 200 }) // 型は合ってるがプロパティー名が違う

type Formatter = (a: string) => string

function printName(firstName: string, formatter: Formatter) {
  console.log(formatter(firstName))
}

// インデックス型
// {[]: 型名}
type Label = {[key: string]: string} // keyにstring, valueにstringを指定
const labels: Label = {
  topTitle: 'top title',
  topSubTitle: 'top sub title',
  topFeature1: 'top feature 1',
  topFeature2: 'top feature 2'
}
// const hoge: Label = {
//   message: 100 // エラー: 型が違う
// }
console.log(labels.topTitle)

export {};

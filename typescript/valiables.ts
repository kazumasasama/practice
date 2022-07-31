// 変数
const num: number = 100 // OK
// num = 200 // constは再代入禁止

function calc(isSum: boolean) {
  let a = 100
  var b = 500
  let total = 0
  if (isSum) {
    let c = 0
    c = a + b
    total = a + b
    return total
  }
  // return c // スコープ外
}
console.log(calc(true))

let age: number = 36
// age = "36" // 違う型は代入できない

// 配列
const array: number[] = []
// array.push('Doraemon') // 配列に指定した型と合わない
array.push(1) // OK

// Union型
const mixedArrayU: (string|number)[] = ['Doraemon', 1]
// mixedArrayU.push(false) // 指定されてない型なのでエラー

// タプル
const mixedArrayT: [string, number] = ['Doraemon', 1]

// ハッシュ
const user: { name: string; age: number } = {
  name: "Nobita",
  age: 36
}
console.log(user.name)

export {}; // const定義時に出る再定義禁止エラーの回避
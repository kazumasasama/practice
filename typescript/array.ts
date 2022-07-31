const array: number[] = []
// array.push('Doraemon') // 配列に指定した型と合わない
array.push(1) // OK

// Union型
const mixedArrayU: (string|number)[] = ['Doraemon', 1]
// mixedArrayU.push(false) // 指定されてない型なのでエラー

// タプル
const mixedArrayT: [string, number] = ['Doraemon', 1]

export {};
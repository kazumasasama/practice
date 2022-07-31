// 型推論

const age = 10
// console.log(age.length) // エラー:ageは数字を代入したときにnumber型に自動的に決定されている

const user = {
  name: 'Doraemon',
  age: 20
}
// console.log(user.age.length) // これもエラー

function getUser() {
  return {
    name: 'Doraemon',
    age: 20
  }
}
const user1 = getUser()
// console.log(user.age.length) // これもエラー

const names = ['Doraemon', 'Nobita', 'Shizuka']
names.forEach((name) => {
  // console.log(name.toUppercase()) // 関数名が間違っているのでエラー
  console.log(name.toUpperCase())
})

// window.confirm関数の返り型はbooelanを返すことをTypeScriptは知っているため代入する関数の型が一致しない場合コンパイル時エラーになります

window.confirm = () => {
  // return 'a' // booleanを返さない限りエラーになる
  return false
}

export {};
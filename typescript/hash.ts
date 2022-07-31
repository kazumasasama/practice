const user: { name: string; age: number } = {
  name: "Nobita",
  age: 36
}
console.log(user.name)

// =====================
// プロパティを？でオプショナルにしている。(引数が渡されなくても動作する。)
function printName(obj: { firstName: string; lastName?: string }) {
  console.log(`${obj.firstName} ${obj.lastName}`)
}
printName({firstName: 'Shizuka'}) // 動作するがlastNameはundefined
printName({firstName: 'Shizuka', lastName: 'Minamoto'})

// =====================
// anyを利用すると型チェックがされない
let name: any = {firstName: 'Nobi'}

// 以下はエラーにならない
// name.hello()
// name()
// name.fullName = 'Nobita Nobi'
// name = 'hello'
// const n: number = name

export {};
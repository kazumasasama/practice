// 型推論
var age = 10;
// console.log(age.length) // エラー:ageは数字を代入したときにnumber型に自動的に決定されている
var user = {
    name: 'Doraemon',
    age: 20
};
// console.log(user.age.length) // これもエラー
function getUser() {
    return {
        name: 'Doraemon',
        age: 20
    };
}
var user1 = getUser();
// console.log(user.age.length) // これもエラー
var names = ['Doraemon', 'Nobita', 'Shizuka'];
names.forEach(function (name) {
    // console.log(name.toUppercase()) // 関数名が間違っているのでエラー
    console.log(name.toUpperCase());
});

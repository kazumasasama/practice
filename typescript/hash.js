"use strict";
exports.__esModule = true;
var user = {
    name: "Nobita",
    age: 36
};
console.log(user.name);
// =====================
// プロパティを？でオプショナルにしている。(引数が渡されなくても動作する。)
function printName(obj) {
    console.log("".concat(obj.firstName, " ").concat(obj.lastName));
}
printName({ firstName: 'Shizuka' }); // 動作するがlastNameはundefined
printName({ firstName: 'Shizuka', lastName: 'Minamoto' });
// =====================
// anyを利用すると型チェックがされない
var name = { firstName: 'Nobi' };

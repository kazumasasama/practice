function sayHello(firstName) {
    console.log('Hello ' + firstName);
}
sayHello(1);
// error.ts:6:10 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// コンパイル生成したjsでは"Hello 1"が問題なく出力される。

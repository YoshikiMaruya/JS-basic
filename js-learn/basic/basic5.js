// default value
const message = (str) => console.log(`Hello ${str}`);

// message() のように引数を設定しないとundefinedになってしまう
// これではエラーのもとになってしまう
// これよりdefault valueを設定してundefinedを回避する。

const new_message = (str="guest") => console.log(`Hello ${str}`)
// 上記のようにdefault valueを設定すると引数がなくても適切に処理される。
new_message()

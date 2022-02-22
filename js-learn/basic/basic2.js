// template string

// 変数を文字列の中に埋め込むには
// 今までは
const myProfile = {
  name: "yoshiki",
  age: 23,
}

console.log("私の名前は" + myProfile.name + "です。歳は" + myProfile.age + "です。")
// 上記の書き方は長くなり、コードが冗長になる。
// ES2015で追加されたtemplate stringでは
console.log(`私の名前は${myProfile.name}です。歳は${myProfile.age}です。`)
// 短い！！便利！！

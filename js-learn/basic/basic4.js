// 分割代入
// template string を用いるよりも短く文字列を表現する。
const myProfile = {
  name: "yoshiki",
  age: 23,
}
const { name, age } = myProfile;
const message = `私の名前は${name}です。歳は${age}です。`
console.log(message)

// 配列の場合
const array = ["yoshiki", 23];
const [n, a] = array;
const profile = `私の名前は${n}です。歳は${a}です。`;
console.log(profile)

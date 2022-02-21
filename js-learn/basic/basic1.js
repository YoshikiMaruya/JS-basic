// let const

// varは書き換えもできるし、再代入も出来てしまうのでセキュアでない
var name = "moe";
console.log(name);

// 再代入
var name = "yoshiki";
console.log(name);
// 書き換え
name = "moe";
console.log(name);

// ES2015で追加されたlet,const
// letは再代入ができない。
let age = 23;
console.log(age);

age = 24;
// 右のように再代入はできない　let age = 25;
console.log(age);

// constは書き換えも再代入もできない
// ただし、オブジェクトや配列の書き換えはできる。

const address = "Tokyo";
// 再代入不可　const address = "Osaka";
console.log(address);
// 書き換え不可　address = "Osaka"

// オブジェクトは書き換え可能
const obj = {
  user: "yoshiki",
}

obj.user = "Moe";
console.log(obj.user);

// 配列も書き換え可能
const array = ["yoshiki", 23];
array[0] = "moe";
console.log(array)

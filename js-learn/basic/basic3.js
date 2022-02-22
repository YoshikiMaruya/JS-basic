// アロー関数
// 従来の関数
function str(str) {
  return str;
}
console.log(str("yoshiki"));
// ちょっと長い
// アロー関数では
const newstr = (str) => {
  return str;
}
console.log(newstr("yoshiki"));

// 複数行でない場合は一行にまとめることも可能
const sum = (a, b) => a + b;
console.log(sum(2, 2))

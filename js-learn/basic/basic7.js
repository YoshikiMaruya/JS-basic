// map filterを使った配列処理
// map
const nameArr = ["maruya", "yoshiki", "moe"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index])
}

const nameArr2 = nameArr.map((name) => {
  return name;
})

console.log(nameArr2);

// 上記for文の処理は以下のように書ける。
// 2つ目の引数にはindexが入る
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`))

// filter
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
})
console.log(newNumArr)

const newNameArr = nameArr.map((name) => {
  if (name === "moe") return name
  else return `${name}さん`
})
console.log(newNameArr)

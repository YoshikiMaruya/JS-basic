## 関数から複数の値を呼び出し元へ返す
関数の定義では`return`文の値に戻り値を記述することで関数の呼び出しもとへ値を返すことが出来ます。
ただ戻り値は1つしか記述できませんので、複数の値を呼び出しもとへ返すことはできません。
しかしそれではあまりに不便です。そこで配列を利用し戻り値を指定することで複数の値を返すことにしてみます。
```
const maxAndMin = (num1, num2, num3) => {
  const maxNum = Math.max(num1, num2, num3);
  const minNum = Math.min(num1, num2, num3);

  return [maxNum, minNum];
}

let numArray = maxAndMin(10, 7, 14);

console.log("Max = " + numArray[0]);
console.log("Min = " + numArray[1]);
```
このように呼び出しもとへ返したい値をいったん配列の要素として格納することで、複数の呼び出しもとへ返すことが出来ます。

## 配列の分割代入を利用
配列の分割代入とは、配列の各要素を異なる変数にそれぞれ代入したい場合に利用できる構文です。以下書式
```
[variableName1, variableName2, ...] = Array;
```
配列の各要素の値を、左辺に記述した変数にひとつずつ代入します。
分割代入を使用しない場合、それぞれの変数に対して配列の要素を個別に代入する必要があります。以下例
```
let personal = ["Yamada", 10, "Tokyo"];

let name = personal[0];
let old = personal[1];
let address = personal[2];
```
以下、分割代入を使用し、きれいにまとめた場合
```
let personal = ["Yamada", 10, "Tokyo"];
let [name, old, address] = personal;
```
サンプルコードの`maxAndMin`を分割代入を使用するパターンに書き換えてみます。
```
function maxAndMin(num1, num2, num3) {
  const maxNum = Math.max(num1, num2, num3);
  const minNum = Math.min(num1, num2, num3);

  return [maxNum, minNum];
}

let [maxResult, minResult] = maxAndMin(10,7,14);

console.log("Max = " + maxResult);
console.log("Min = " + minResult);
```

上記のように分割代入を使用すると、関数から返された配列の各要素の値を、どんな値が格納されているのかわかりやすい名前をつけた変数にまとめて格納することが出来、可読性向上が見込めます。

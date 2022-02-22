// spread
// 展開
const array1 = [1, 2];
console.log(array1);
console.log(...array1);
// スプレッド構文を使うと値を個別に出力できる。

const sum = (a, b) => console.log(a + b);
sum(array1[0], array1[1])
sum(...array1)  // このように展開して引数として渡せる。

// まとめる
const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array3] = array2;
console.log(array3);

// 配列のコピーと結合
const array4 = [10, 20];
const array5 = [30, 40];
const array6 = [...array4];
// なぜarray6 = array4ではだめなのか
// スプレッド構文を使用しないと参照渡しになってしまう
// つまりarray6の値を変更するとarray4の値も変更になってしまうのでスプレッド構文を使用するのがベスト

const array7 = [...array4, ...array5];
console.log(array6, array7)

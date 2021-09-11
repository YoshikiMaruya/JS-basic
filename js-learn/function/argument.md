## What's an arguments object?
`arguments object`は関数の中でのみ利用できるオブジェクトです。
関数に渡されてきた値をすべて格納しており、配列の要素のように`argument[0],argument[1], ...`という形で関数に渡されてきた値を取得することが出来ます。なお`arguments object`はアロー関数の中では使用できないので注意！！

## 実際に渡された引数の数を取得する（length method）
JavaScriptでは関数側で引数を2つ受け取るように定義されていたとしても、関数を呼び出すときに関数に渡す値は2つより多くても少なくてもエラーにはならない。（違和感）
以下例
```
function displayProfile(name, old) {
  console.log("name : " + name);
  console.log("old : " + old);
}

displayProfile("Yamada", 24, "Tokyo");
// output -> name : Yamada
//           old : 24

displayProfile("Suzuki");
// output -> name : Suzuki
//           old : undefined
```
このようにJavaScriptでは関数が呼び出された時に必ずしも関数側で定義した引数の数だけ値が渡されてくるとは限りません。このような場合に`arguments object`の`length`プロパティを参照すると、実際に渡されてきた値の個数を取得できる。以下例
```
function displayProfile(name, old) {
  console.log("arguments.length : " + argument.length);
}

displayProfile("Yamada", 24, "Tokyo");
// output -> arguments.length : 3

displayProfile("Suzuki");
// output -> arguments.length : 1
```

## 呼び出しもとから渡されてきた値を取得する
呼び出しもとから渡されてきた値は関数の引数に記述した変数に格納されますが、それとは別に`arguments object`にも格納されており、それぞれ`arguments[0], argument[1], ...`という形取得することが出来ます。
```

```

## 関数を定義する
functionキーワードを使った関数宣言に関して説明する。
```
function 関数名(引数1, 引数2 = DEFAULT_VALUE, ...) {
  実行される処理1;
  実行される処理2;
  ...

  return 戻り値;
}
```

引数はなくてもよいがその場合でも`()`は必要
引数2に施したように関数に引数にはデフォルト値を設定することが出来る。ちなみに値をを設定していない引数を参照するとアウトプットは`Null`ではなく`undefined`となる。

## 関数を呼び出す
定義した関数を呼び出すには次のように記述します。
```
関数名(引数1, 引数2, ...);
```

関数の戻り値を変数に格納する場合には次のように`=`演算子の左側に変数、右側に関数の呼び出しを記述する。
```
let 変数名 = 関数名(引数1, 引数2, ...);
```

## その他の関数定義
1. functionコンストラクタを使用した定義

  ```
  let variableName = new function(arg1, arg2, ..., process);
  ```
2. 関数リテラルを使用した定義

  ```
  let variableName = function(arg1, arg2, ...) {
    process1;
    process2;
    ...

    return value
  };
  ```
3. アロー関数を使用した定義

  let variableName = (arg1, arg2, ...) => {
    process1;
    process2;
    ...

    return value;
  };

// // 泛型 generic 泛指的类型 <> 泛型的写法

// function join<T, P>(first: T, second: P) {
//   return `${first}${second}`;
// }

// function anotherJoin<T>(first: T, second: T): T {
//   return first;
// }

// function map<T>(params: Array<T>) {
//   return params;
// }

// // join<number, number>(1, 1);
// // join<number, string>(1, '1');
// // map<string>(['1', '2', '3']);
// join(1, '1'); // 对泛型不写指定类型的话 会推断类型

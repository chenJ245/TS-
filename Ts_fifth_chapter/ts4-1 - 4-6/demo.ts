// interface Bird {
//   fly: boolean;
//   sing: () => {};
// }

// interface Dog {
//   fly: boolean;
//   bark: () => {};
// }

// // 联合类型 只会取共有属性 而 sing 和 bark 属于单独的方法 而传来的参数又不确定是 哪个 类型
// // 就需要使用 类型断言 as
// function traninAnial(animal: Bird | Dog) {
//   // animal.sing()
//   if (animal.fly) {
//     (animal as Bird).sing();
//   } else {
//     (animal as Dog).bark();
//   }
// }

// // in 语法来做类型保护
// function traninAnialSecond(animal: Bird | Dog) {
//   if ('sing' in animal) {
//     animal.sing();
//   } else {
//     animal.bark();
//   }
// }

// // typeof 语法来做类型保护
// function add(first: string | number, second: string | number) {
//   if (typeof first === 'string' || typeof second === 'string') {
//     return `${first} + ${second}`;
//   }
//   return first + second;
// }

// // 使用 instanceof 语法来做类型保护
// class NumberObj {
//   count: number;
// }

// function addSecond(first: object | NumberObj, second: object | NumberObj) {
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count;
//   }
//   return 0;
// }

// // 类的装饰器
// // 装饰器本身是一个函数
// // 类装饰器接收的参数是构造函数
// // 装饰器通过 @ 符号来使用
// // 收集的时候是从上到下从左到右，正真装饰器在执行的时候是 从下到上 从右到左
// // 装饰器的工厂模式 在包装一层函数 然后把装饰器 return 出去 还可以传参来判断这个装饰器是否可以被使用

// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('lee');
//       };
//     };
//   } else {
//   }
//   return function (constructor: any) {};
//   // console.log('decorator');
// }

// // function testDecorator1(constructor: any) {
// //   console.log('decorator1');
// // }

// @testDecorator(true)
// // @testDecorator1
// class Test {}

// const test = new Test();
// // const test1 = new Test();
// (test as any).getName();

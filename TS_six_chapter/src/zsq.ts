// // T 继承 一个构造函数 new (argments: 数组，数组的每一项都是 any类型 返回一个 any类型的类 => any) 所以T现在是一个实例化对象
// // <T extends new (...args: any[]) => {}>  通过 new的这个类 T可以变成构造函数
// // function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
// //   return class extends constructor {
// //     name = 'lees';
// //     getName() {
// //       return this.name;
// //     }
// //   };
// // }
// // @testDecorator
// // class Test {
// //   name: string;
// //   constructor(name: string) {
// //     // console.log(1);
// //     this.name = name;
// //     // console.log(2);
// //   }
// // }

// // const test = new Test('lee');
// // console.log(test);
// // console.log((test as any).getName());

// // function testDecorator() {
// //   return function <T extends new (...args: any[]) => any>(constructor: T) {
// //     return class extends constructor {
// //       name = 'lees';
// //       getName() {
// //         return this.name;
// //       }
// //     };
// //   };
// // }

// // const Test = testDecorator()(
// //   class {
// //     name: string;
// //     constructor(name: string) {
// //       this.name = name;
// //     }
// //   }
// // );

// // const test = new Test('lee');
// // console.log(test.getName());

// function getNameDecorator(
//   target: any,
//   key: string,
//   descriptor: PropertyDescriptor
// ) {
//   // static 静态方法 target 对应的是类的 构造函数
//   // 普通方法，target 对应的是类的 prototype
//   // console.log(target, key);
//   // descriptor.writable = false; // 不可被重写
//   // descriptor.writable = true; // 可被重写
//   descriptor.value = function () {
//     // 可以改变内容 例如这里拿到 getName的引用 然后对方法进行变更
//     return 'descriptor';
//   };
// }

// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorator // @getNameDecorator只要定义类的时候用了这个 就会定义完成就触发这个装饰器
//   getName() {
//     return this.name;
//   }
// }

// const test = new Test('lee');
// // test.getName = () => {
// //   return '123';
// // };
// console.log(test.getName());

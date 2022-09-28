// 参数装饰器
// target：原型、key：方法名、paramIndex：参数所在的位置
// function paramDecorator(target: any, key: string, paramIndex: number): any {
//   console.log(target, key, paramIndex);
// }

// class Test {
//   getInfo(name: string, @paramDecorator age: number) {
//     console.log(name, age);
//   }
// }

// const test = new Test();
// test.getInfo('张三', 20);

// // test.name = '芜湖';

// // 属性的修饰器
// function nameDecorator(target: any, key: string): any {
//   // const descriptor: PropertyDescriptor = {
//   //   writable: false,
//   // };
//   // return descriptor;

//   target[key] = 'xbr'; // 这样写的时候就是修改的是 Test的prototype的name属性
// }

// // name 放在实例上 test
// class Test {
//   @nameDecorator
//   name = 'lee';
// }

// const test = new Test();
// console.log(test.name);
// console.log((test as any).__proto__.name);

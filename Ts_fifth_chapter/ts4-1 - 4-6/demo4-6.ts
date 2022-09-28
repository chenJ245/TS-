// interface Item {
//   name: string;
// }

// T 继承 Item 的属性 接收的参数就必须要有 一个 name
// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const data = new DataManager<number>([1]);
// data.getItem(0);

// const data = new DataManager([
//   {
//     name: 'dell',
//   },
// ]);

// interface Test {
//   name: string;
// }

// const data = new DataManager<string>([]);

// 如何使用泛型作为一个具体的类型注解
// function hello<T>(param: T) {
//   return param;
// }

// const func: <T>(param: T) => T = hello;

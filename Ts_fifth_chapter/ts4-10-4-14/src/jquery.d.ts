// es6 common umd 用es6 的方法来使用模块化 Es6 模块化

// declare module 'jquery' {
//   interface JqueryInstance {
//     html: (html: string) => JqueryInstance;
//   }

//   // $ 混合类型
//   // 函数重载
//   function $(readyFunc: () => void): void;
//   function $(selector: string): JqueryInstance;

//   namespace $ {
//     namespace fn {
//       class init {}
//     }
//   }

//   // 暴露出去
//   export = $;
// }

// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
// interface JqueryInstance {
//   html: (html: string) => JqueryInstance;
// }
// 函数重载
// declare function $(readyFunc: () => void): void;
// declare function $(selector: string): JqueryInstance;

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

// 使用了 interface 的语法，实现了函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: JQuery;

// 文件依赖 依赖于 commponents.ts 文件
// /<reference path= './commponents.ts'/>

// namespace Home {
// class Header {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerText = 'This is Header';
//     document.body.appendChild(elem);
//   }
// }

// class Content {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerText = 'This is Content';
//     document.body.appendChild(elem);
//   }
// }

// class Footer {
//   constructor() {
//     const elem = document.createElement('div');
//     elem.innerText = 'This is Footer';
//     document.body.appendChild(elem);
//   }
// }
// }

import { Header, Content, Footer } from './commponents';

export default class Page {
  // user: Components.User = {
  //   name: 'lingmeng',
  // };
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}

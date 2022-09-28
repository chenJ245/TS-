// namespace Components {
//   export namespace SubComponents {
//     export class Test {}
// }
//   }
define("commponents", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    // export interface User {
    //   name: string;
    // }
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }
    exports.Footer = Footer;
});
// 文件依赖 依赖于 commponents.ts 文件
// /<reference path= './commponents.ts'/>
define("page", ["require", "exports", "commponents"], function (require, exports, commponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page {
        // user: Components.User = {
        //   name: 'lingmeng',
        // };
        constructor() {
            new commponents_1.Header();
            new commponents_1.Content();
            new commponents_1.Footer();
        }
    }
    exports.default = Page;
});

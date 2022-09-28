# TypeScript 带来的了什么优势？

1. ts 的静态类型使得我们可以在编写代码的时候可以快速的定位一些潜在问题--开发过程中，发现潜在问题。
2. 更友好的编辑器自动提示
3. 代码语义更清晰

在 package.json 中的 bulid 上方 的 ts-node 插件 被换掉了
"dev": "ts-node ./src/crowller.ts",

-w 参数监控你 npm run 的 命令 一直监控他 你改变一次你的内容 他就会重新 npm 一次
"bulid": "tsc -w"

配置了 nodemon 运行时 自动改变 js 文件
"start": "nodemon node ./build/crowller.js"

配置 nodemon 忽略那些文件
"nodemonConfig": {
"ignore": [
"dat 执行 concurrently
npm i concurrently -D

集成 两个一起运行
"dev": "concurrently npm run dev:build & npm run start"
缩写为： "dev": "concurrently npm:dev:\*"

会去相对的 tsconfig.json 里面找对应的 文件 如果没有 在去目录下面找所有的 ts 文件 然后进行编译
tsc

去除注释
"removeComments": true,

手动加一个 这个的时候 就是 指定 tsc 指定文件 进行编译 也可以使用正则
"include": ["./demo.ts"],

除了这个文件以外的所有文件都 编译 也可以使用正则
"exclude": ["./demo.ts"],

编译指定文件 也可以使用正则
"files":["./demo.ts"],

false 不要求显示的是 any 类型 true 就是必须显示类型为 any 不能为隐式的
"noImplicitAny": false,

false 不强势检测 null 类型 true 就是强制检测 null 类型
"strictNullChecks": false,

tsc 指定目录的文件的话 不会执行 tsconfig.json 文件格式管理

详细的编译项
"incremental": true,

自动编译路径 选择 ./src 目录下
"rootDir": "./src",

创建文件目录 tsc 编译后的 ts 文件转为 js 放到 这个文件夹下
"outDir": "./build",

选择编译之后的文件版本
"target": "es2016",

可以编译 js 文件
"allowJs": true,

检测 js 语法
"checkJs": true,

会成功一个 sourceMap 文件
"sourceMap": true,

检测局部有没有被使用
"noUnusedLocals": true,

对函数的参数进行校验
"noUnusedParameters": true,

代码打包 打包工具会自动编译文件 会编译成浏览器能解析的代码然后再去启一个服务器 然后 返回给的是编译之后的文件 例如 ts 会被编译为 js
Parcel

.d.ts 类型定义文件 帮助 ts 来编译

定义属性 可定义变量 可以定义方法 且可以定义同一个属性 定义多次
declare
定义的全局的变量或者函数 可以直接使用 且同一个名字可以定义多次 只不过传参什么的要不同

中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 问题 1：express 库的类型定义文件 .d.ts 文件类型描述不稳定。
解决方案 可以通过去 interface 去定义一个新的属性接口，然后继承 request 然后给传入的参数手动定义类型
// 问题 2: 当我使用中间件的时候，对 req 或者 res 做了修改之后, 实际上类型并不能改变。
解决方案 a/\*"
]
}

当运行 npm run build 和 npm run start 时 同时监听 ts 和 js ts 变 js 就变相对的 data 里面的 course.json 也跟着变并行

装饰器的配置 允许实验
"experimentalDecorators": true,
/_ Enable experimental support for TC39 stage 2 draft decorators. _/"emitDecoratorMetadata": true,

会在类创建好之后 立即执行这个装饰器 对定义的这个类做一些装饰
@testDecorator
class Test {}

获取 到在类与类方法上添加的元数据
npm i reflect-metadata --save

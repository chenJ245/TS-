"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
require("reflect-metadata");
var index_1 = require("../decorator/index");
var util_1 = require("../utils/util");
var crowller_1 = __importDefault(require("../utils/crowller"));
var analyzer_1 = __importDefault(require("../utils/analyzer"));
var checkLogin = function (req, res, next) {
    var isLogin = !!(req.session ? req.session.login : false); // 转成 false 再转成 true
    console.log('checkLogin middleware');
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var test = function (req, res, next) {
    console.log('test middleware');
    next();
};
var CrowllerController = /** @class */ (function () {
    function CrowllerController() {
    }
    CrowllerController.prototype.getData = function (req, res) {
        var secret = 'secretKey';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
        var analyzer = analyzer_1.default.getInstance();
        new crowller_1.default(url, analyzer);
        res.json(util_1.getResponseData(true));
    };
    CrowllerController.prototype.showData = function (req, res) {
        try {
            var position = path_1.default.resolve(__dirname, '../../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(util_1.getResponseData(JSON.parse(result)));
        }
        catch (e) {
            res.json(util_1.getResponseData(false, '数据不存在'));
        }
    };
    __decorate([
        index_1.get('/getData'),
        index_1.use(checkLogin),
        index_1.use(test),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "getData", null);
    __decorate([
        index_1.get('/showData'),
        index_1.use(checkLogin),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], CrowllerController.prototype, "showData", null);
    CrowllerController = __decorate([
        index_1.controller('/')
    ], CrowllerController);
    return CrowllerController;
}());
exports.CrowllerController = CrowllerController;

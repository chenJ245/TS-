import 'reflect-metadata';
import { RequestHandler } from 'express';
import { CrowllerController, LoginController } from '../controller/index';

export function use(middleware: RequestHandler) {
  return function (target: CrowllerController | LoginController, key: string) {
    const originMiddlewares =
      Reflect.getMetadata('middlewares', target, key) || [];
    originMiddlewares.push(middleware);
    Reflect.defineMetadata('middlewares', originMiddlewares, target, key);
  };
}

import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleweare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const date = new Date().toLocaleDateString();

    console.log(`METHOD: ${req.method}, ENDPOINT: ${req.url}, DATA: ${date}`);

    next();
  }
}

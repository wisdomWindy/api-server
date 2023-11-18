import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import errMiddleware from './middleware/err';
import { expressjwt } from 'express-jwt';
// 数据校验依赖
import Joi from 'joi';
import cors from 'cors';
import config from './config';
import type { Response, Request, RequestHandler } from 'express';
import exampleRoute from './routes/exampleRoute';

const app = express();

// 处理跨域
app.use(cors());

// 静态资源托管
app.use(express.static(path.resolve(__dirname, 'public')));

// 解析请求体数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 注册错误处理中间件
app.use(errMiddleware as RequestHandler);

// token验证中间件
app.use(
  expressjwt({
    secret: config.apisecret,
    algorithms: ['HS256']
  })
);

// 注册路由
app.use(exampleRoute);

// 全局错误处理
app.use(function (
  err: Error,
  req: Request,
  res: Response & { cc: (err: Error, code?: number) => void }
) {
  if (err instanceof Joi.ValidationError) {
    return res.cc(err);
  }
  if (err.name === 'UnauthorizedError') return res.cc(err);
  res.cc(err);
} as any);

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

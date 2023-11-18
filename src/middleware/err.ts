import type { Response, Request,NextFunction } from 'express';
export default function errMiddleware (req: Request, res: Response & { cc: (err: Error|string, code: number) => void }, next:NextFunction) {
  res.cc = function (err, code) {
    res.send({
      code,
      message: err instanceof Error ? err.message : err
    });
  };
  next();
}
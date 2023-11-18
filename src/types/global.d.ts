import type { Request as expressRequest, Response as _Response } from 'express';
import type { Request as expressJwtRequest } from 'express-jwt';
import * as core from 'express-serve-static-core';

interface ReqRequest extends expressRequest, expressJwtRequest,core.Request,core.ReqQuery {}

interface ResResponse
  extends _Response,
    core.Response<any, Record<string, any>, number>,
    Record<string, any> {
  cc: (err: Error | string, code: number) => void;
}

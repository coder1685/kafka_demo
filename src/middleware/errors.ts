import { Context, Next, Middleware } from "koa";
import { GenericError, BadRequestError } from "../models/errors";
import * as HttpStatus from "http-status-codes";

export function errorHandler(): Middleware {
  return async (ctx: Context, next: Next): Promise<void> => {
    try {
      await next();
    } catch (err) {
      if (err instanceof GenericError) {
        ctx.status = HttpStatus.INTERNAL_SERVER_ERROR;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx);
      } else if (err instanceof BadRequestError) {
        ctx.status = HttpStatus.BAD_REQUEST;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx);
      } else {
        ctx.status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
        ctx.body = err.message;
        ctx.app.emit("error", err, ctx);
      }
    }
  };
}

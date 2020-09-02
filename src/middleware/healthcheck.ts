import { Context, Next, Middleware } from 'koa';
import * as HttpStatus from 'http-status-codes';
import HealthCheck from '../controllers/healthcheck';

export function getHealthCheckHandler(healthCheck: HealthCheck): Middleware {
    return async (ctx: Context, next: Next): Promise<void> => {
        healthCheck.isOK();
        ctx.status = HttpStatus.OK;
        return next();
    };
}

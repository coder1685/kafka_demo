import { createMockContext } from '@shopify/jest-koa-mocks';
import { Context } from 'koa';
import * as HttpStatus from 'http-status-codes';
import { getHealthCheckHandler } from './healthcheck';
import HealthCheck from '../controllers/healthcheck';

test('getHealthCheckHandler returns success', async () => {
    const hc = new HealthCheck();

    const ctx = createMockContext();
    const next = jest.fn();

    await getHealthCheckHandler(hc)(ctx, next);

    expect(next).toHaveBeenCalled();
    expect(ctx.status).toBe(HttpStatus.OK);
});

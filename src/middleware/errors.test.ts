import { createMockContext } from '@shopify/jest-koa-mocks';

import * as HttpStatus from 'http-status-codes';
import { errorHandler } from './errors';
import { GenericError, BadRequestError } from '../models/errors';

test('errorHandler returns INTERNAL_SERVER_ERROR for generic error', async () => {
    const ctx = createMockContext();
    ctx.app.on('error', (err, ctx) => {});
    const next = () =>
        new Promise((resolve, reject) => {
            throw new GenericError();
        });
    await errorHandler()(ctx, next);
    expect(ctx.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
});

test('errorHandler returns BAD_REQUEST for bad request error', async () => {
    const ctx = createMockContext();
    ctx.app.on('error', (err, ctx) => {});
    const next = () =>
        new Promise((resolve, reject) => {
            throw new BadRequestError();
        });
    await errorHandler()(ctx, next);
    expect(ctx.status).toBe(HttpStatus.BAD_REQUEST);
});

test('errorHandler returns INTERNAL_SERVER_ERROR for error', async () => {
    const ctx = createMockContext();
    ctx.app.on('error', (err, ctx) => {});
    const next = () =>
        new Promise((resolve, reject) => {
            throw new Error();
        });
    await errorHandler()(ctx, next);
    expect(ctx.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
});

import { createMockContext } from '@shopify/jest-koa-mocks';
import * as HttpStatus from 'http-status-codes';
import KafkaPublish from "../controllers/kafka-publish";
import { postKafkaPublishHandler} from "./kafka-publish";
import { BAD_REQUEST } from "http-status-codes";

test('postKafkaPublishHandler returns success', async () => {
    const kafka = new KafkaPublish();

    const ctx = createMockContext({
        requestBody: {
            "message": "kafka test"
        }
    });
    const next = jest.fn();

    await postKafkaPublishHandler(kafka)(ctx, next);

    expect(next).toHaveBeenCalled();
    expect(ctx.status).toBe(HttpStatus.CREATED);
    expect(ctx.response.body.status).toBe("Message published")
});

test('postKafkaPublishHandler returns 400 when no body found', async () => {

    const t = async () => {
        const kafka = new KafkaPublish();

        const ctx = createMockContext();
        ctx.request.body = {};

        const next = jest.fn();

        await postKafkaPublishHandler(kafka)(ctx, next);
        expect(ctx.status).toBe(BAD_REQUEST);
        expect(ctx.body).toBe('No body found');
    };
});

test('postKafkaPublishHandler returns 400 when body is {}', async () => {

    const t = async () => {
        const kafka = new KafkaPublish();

        const ctx = createMockContext();
        ctx.request.body = '{}';

        const next = jest.fn();

        await postKafkaPublishHandler(kafka)(ctx, next);
        expect(ctx.status).toBe(BAD_REQUEST);
        expect(ctx.body).toBe('No body found');
    };
});

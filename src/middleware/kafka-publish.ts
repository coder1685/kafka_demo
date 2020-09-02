import { Context, Next, Middleware } from "koa";
import * as HttpStatus from "http-status-codes";
import KafkaPublish from "../controllers/kafka-publish";

export function postKafkaPublishHandler(kafka: KafkaPublish): Middleware {
    return async (ctx: Context, next: Next): Promise<void> => {
        ctx.accepts('application/json');
        ctx.response.body = kafka.doPublish(ctx.request.body);
        ctx.status = HttpStatus.CREATED;
        return next();
    };
}

import Koa from "koa";
import AppRouter from "./app-router";
import { errorHandler } from "./middleware/errors";
import bodyParser from "koa-bodyparser";
import KafkaPublish from "./controllers/kafka-publish";
import koaBody = require("koa-body");
import HealthCheck from "./controllers/healthcheck";

const app = new Koa();

const kafka = new KafkaPublish();
const hc = new HealthCheck();
const appRouter = new AppRouter(hc, kafka);

app.use(bodyParser());
app.use(errorHandler());
app.use(koaBody());
app.use(appRouter.routes());

export = app;

import { postKafkaPublishHandler } from "./middleware/kafka-publish";
import Router = require("koa-router");
import KafkaPublish from "./controllers/kafka-publish";
import HealthCheck from "./controllers/healthcheck";
import {getHealthCheckHandler} from "./middleware/healthcheck";

export default class AppRouter extends Router {
  constructor(private healthCheck: HealthCheck, private kafka: KafkaPublish) {
    super();
    this.setRoutes();
  }

  private setRoutes() {
    this.get('/healthcheck', getHealthCheckHandler(this.healthCheck));
    this.post("/doPublish", postKafkaPublishHandler(this.kafka));
  }
}

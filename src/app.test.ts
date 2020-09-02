import KafkaPublish from "./controllers/kafka-publish";
import AppRouter from "./app-router";
import HealthCheck from "./controllers/healthcheck";

test('router has /doPublish and /healthcheck path', async () => {
    const kafka = new KafkaPublish();
    const hc = new HealthCheck();
    const router = new AppRouter(hc, kafka);
    expect(router.stack[0].path).toBe('/healthcheck');
    expect(router.stack[1].path).toBe('/doPublish');
});

import KafkaPublish from "./kafka-publish";
import {BadRequestError} from "../models/errors";

test("kafka throw error when empty", () => {
    const t = () => {
        let body = {};
        const kafka = new KafkaPublish();
        kafka.doPublish(body);
    };
    expect(t).toThrow(BadRequestError);
});

test("kafka throw error when body {}", () => {
    const t = () => {
        let body = '{}';
        const kafka = new KafkaPublish();
        kafka.doPublish(body);
    };
    expect(t).toThrow(BadRequestError);
});

test("kafka success with valid body", () => {
    let body = {
        requestBody: {
            "message": "kafka test"
        }
    };
    const kafka = new KafkaPublish();
    const response = kafka.doPublish(body);
    expect(response.status).toBe("Message published")
});

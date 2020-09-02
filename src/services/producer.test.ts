import { jsonData } from "../utils/test-data";
import { produceMessage } from "./producer";

test("kafka publish success", () => {
  let messagePublished = produceMessage(jsonData);
  let status: string = "Message published";
  expect(messagePublished.status).toBe(status);
});

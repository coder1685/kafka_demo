import { produceMessage } from "../services/producer";
import { BadRequestError } from "../models/errors";

export default class KafkaPublish {
  constructor() {}
  public doPublish(requestBody: Object): any {
      isValidBody(requestBody);
      return produceMessage(requestBody);
  }
}

function isValidBody(requestBody: Object) {
    if (Object.keys(requestBody).length === 0 || requestBody === '{}') {
        throw new BadRequestError("No Body found");
    }
}

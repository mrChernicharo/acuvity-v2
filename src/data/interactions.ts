import { faker } from "@faker-js/faker";
import { getRandomInt } from "../utils/helperFns";
import { Interaction } from "../utils/types";
import { SERVICES, SERVICES_DICT } from "./services";
import { USERS, USERS_DICT } from "./users";

const INTERACTIONS: Interaction[] = [];
const INTERACTIONS_DICT: Map<number, Interaction> = new Map();

function createInteractions(interactionCount = 10_000) {
  const totalInteractions = interactionCount;
  while (interactionCount > 0) {
    const id = totalInteractions - interactionCount;
    const serviceId = getRandomInt(1, SERVICES.length);
    const userId = getRandomInt(1, USERS.length);
    const user = USERS_DICT.get(userId);
    const service = SERVICES_DICT.get(serviceId);
    if (!service || !user) continue;

    const interaction: Interaction = {
      id,
      userId,
      serviceId,
      prompt: faker.lorem.lines({ min: 1, max: 2 }),
      output: faker.lorem.paragraphs({ min: 1, max: 4 }),
      timestamp: faker.date.recent({ days: 150 }).getTime(),
    };

    INTERACTIONS.push(interaction);
    INTERACTIONS_DICT.set(id, interaction);
    interactionCount--;
  }
}

createInteractions();
console.log({ INTERACTIONS, INTERACTIONS_DICT });

export { INTERACTIONS, INTERACTIONS_DICT };

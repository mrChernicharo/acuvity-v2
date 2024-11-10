import { faker } from "@faker-js/faker";
import { getRandomInt } from "../utils/helperFns";
import { Interaction } from "../utils/types";
import { SERVICES } from "./services";
import { USERS } from "./users";

const INTERACTIONS: Interaction[] = [];
const INTERACTIONS_DICT: Map<number, Interaction> = new Map();

function createInteractions(interactionCount = 200) {
  const totalInteractions = interactionCount;
  while (interactionCount > 0) {
    const id = totalInteractions - interactionCount;

    const interaction: Interaction = {
      id,
      userId: getRandomInt(1, USERS.length),
      serviceId: getRandomInt(1, SERVICES.length),
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

export { INTERACTIONS, INTERACTIONS_DICT };

import { getRandomInt } from "@/utils/helperFns";
import { Interaction } from "@/utils/types";
import { faker } from "@faker-js/faker";
import { SERVICES } from "./services";
import { USERS } from "./users";

const INTERACTIONS: Interaction[] = [];
const INTERACTIONS_DICT: Map<number, Interaction> = new Map();

function createInteractions(interactionCount = 1000) {
  const servicesByUser = USERS.map((user) => {
    const serviceCount = getRandomInt(1, 20);
    const services = [];
    while (services.length < serviceCount) {
      const idx = getRandomInt(0, serviceCount);
      services.push(SERVICES[idx]);
    }
    return { user, services };
  });

  const totalInteractions = interactionCount;
  while (interactionCount > 0) {
    const id = totalInteractions - interactionCount;
    const { user, services } = servicesByUser[interactionCount % USERS.length];

    const randIdx = getRandomInt(0, services.length - 1);
    const pickedService = services[randIdx];

    if (!pickedService || !user) continue;

    const timestamp = faker.date.recent({ days: 150 }).getTime();
    const prompts = Array(getRandomInt(1, 10))
      .fill(0)
      .map((_, i) => ({
        input: faker.lorem.lines({ min: 1, max: 2 }),
        output: faker.lorem.lines({ min: 1, max: 4 }),
        timestamp: timestamp + i * getRandomInt(1000, 120_000),
      }))
      .sort((a, b) => b.timestamp - a.timestamp);

    const interaction: Interaction = { id, userId: user.id, serviceId: pickedService.id, prompts };

    INTERACTIONS.push(interaction);
    INTERACTIONS_DICT.set(id, interaction);
    interactionCount--;
  }
}

createInteractions();
console.log({ INTERACTIONS, INTERACTIONS_DICT });

export { INTERACTIONS, INTERACTIONS_DICT };

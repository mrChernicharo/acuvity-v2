import { Service } from "../utils/types";
import { INTERACTIONS } from "./data/interactions";
import { SERVICES_DICT } from "./data/services";
import { USERS_DICT } from "./data/users";

export function getUserData(userId: number) {
  const user = USERS_DICT.get(userId);
  if (!user) return { error: `no user with id of ${userId}`, payload: null };

  const userInteractions = INTERACTIONS.filter((int) => int.userId === userId);

  const interactions = userInteractions.reduce(
    (acc: Record<number, { service: Service; count: number }>, interaction) => {
      if (!acc[interaction.serviceId]) {
        const service = SERVICES_DICT.get(interaction.serviceId)!;
        acc[interaction.serviceId] = { service, count: 0 };
      }
      acc[interaction.serviceId].count++;
      return acc;
    },
    {}
  );

  return { error: null, payload: { ...user, interactions } };
}

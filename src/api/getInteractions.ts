import { INTERACTIONS } from "../data/interactions";
import { SERVICES_DICT } from "../data/services";
import { USERS_DICT } from "../data/users";
import { groupArray } from "../utils/helperFns";

export function getInteractions(userId: number, serviceId: number, limit = 3, offset = 0) {
  const user = USERS_DICT.get(userId);
  if (!user) return { error: `no user with id of ${userId}`, payload: null };

  const service = SERVICES_DICT.get(serviceId);
  if (!service) return { error: `no service found with id of ${serviceId}`, payload: null };

  const interactions = INTERACTIONS.filter(
    (interaction) => interaction.userId === userId && interaction.serviceId === serviceId
  );

  const paginatedInteractions = groupArray(interactions, limit);
  const payload = {
    interactions: paginatedInteractions?.[offset] ?? [],
    pageCount: Math.ceil(interactions.length / limit),
  };

  return { error: null, payload };
}

import { INTERACTIONS } from "../data/interactions";
import { SERVICES_DICT } from "../data/services";
import { USERS_DICT } from "../data/users";
import { User } from "../utils/types";

export function getServiceData(serviceId: number) {
  const service = SERVICES_DICT.get(serviceId);
  if (!service) return { error: `no service found with id of ${serviceId}`, payload: null };

  const serviceInteractions = INTERACTIONS.filter((interaction) => interaction.serviceId === serviceId);

  const interactions = serviceInteractions.reduce((acc: Record<string, { user: User; count: number }>, interaction) => {
    if (!acc[interaction.userId]) {
      const user = USERS_DICT.get(interaction.userId)!;
      acc[interaction.userId] = { user, count: 0 };
    }
    acc[interaction.userId].count++;
    return acc;
  }, {});

  return { error: null, payload: { ...service, interactions } };
}

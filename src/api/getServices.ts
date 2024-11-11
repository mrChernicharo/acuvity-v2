import { SERVICES } from "@/api/data/services";
import { groupArray } from "@/utils/helperFns";
import { INTERACTIONS } from "./data/interactions";

const services_with_interaction_count = SERVICES.map((service) => {
  const interactionCount = INTERACTIONS.reduce((acc, int) => {
    if (int.serviceId === service.id) acc += 1;
    return acc;
  }, 0);
  return { ...service, interactionCount };
});

export function getServices(limit = 10, offset = 0) {
  const paginatedServices = groupArray(services_with_interaction_count, limit);
  return paginatedServices?.[offset] ?? [];
}

import { SERVICES } from "@/api/data/services";
import { groupArray } from "@/utils/helperFns";

export function getServices(limit = 10, offset = 0) {
  const paginatedServices = groupArray(SERVICES, limit);
  return paginatedServices?.[offset] ?? [];
}

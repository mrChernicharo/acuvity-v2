import { USERS } from "@/data/users";
import { groupArray } from "@/utils/helperFns";

export function getUsers(limit = 10, offset = 0) {
  const paginatedUsers = groupArray(USERS, limit);
  return paginatedUsers?.[offset] ?? [];
}

import { USERS } from "@/api/data/users";
import { groupArray } from "@/utils/helperFns";
import { INTERACTIONS } from "./data/interactions";

const users_with_interaction_count = USERS.map((user) => {
  const interactionCount = INTERACTIONS.reduce((acc, int) => {
    if (int.userId === user.id) acc += 1;
    return acc;
  }, 0);
  return { ...user, interactionCount };
});

export function getUsers(limit = 10, offset = 0) {
  const paginatedUsers = groupArray(users_with_interaction_count, limit);
  return paginatedUsers?.[offset] ?? [];
}

import { User } from "@/utils/types";
import { faker } from "@faker-js/faker";

const USERS: User[] = [];
const USERS_DICT = new Map<number, User>();

function createUsers(userCount = 20) {
  let i = 0;
  while (i < userCount) {
    const user: User = {
      id: i + 1,
      name: faker.person.fullName(),
      company: faker.company.name(),
      imageUrl: faker.image.avatarGitHub(),
    };

    USERS.push(user);
    USERS_DICT.set(user.id, user);
    i++;
  }
}

createUsers();

console.log({ USERS_DICT, USERS });
export { USERS, USERS_DICT };

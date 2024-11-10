import { User } from "../utils/types";

const USERS: User[] = [
  { id: 1, name: "Tom Capone", company: "Genesys" },
  { id: 2, name: "Marjory Cohen", company: "Google" },
  { id: 3, name: "Xi Xiaozheng", company: "Meta" },
  { id: 4, name: "Ali Al Salah", company: "Emirates" },
  { id: 5, name: "Maria Torres", company: "Doordash" },
  { id: 6, name: "Paco Rojas", company: "Uber" },
  { id: 7, name: "Linda Goldberg", company: "Netlify" },
  { id: 8, name: "Rolando Bastos", company: "Microsoft" },
];

const USERS_DICT = new Map();
USERS.forEach((user) => {
  USERS_DICT.set(user.id, user);
});

export { USERS, USERS_DICT };

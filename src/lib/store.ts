import { getUsers } from "@/api/getUsers";
import { Service, User } from "@/utils/types";
import { create } from "zustand";

interface AppStore {
  users: User[];
  services: Service[];
  addUsers: (users: User[]) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  users: getUsers(4, 0),
  services: [],
  addUsers: (users: User[]) => set((state) => ({ ...state, users: [...state.users, ...users] })),
}));

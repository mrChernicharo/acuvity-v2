import { getServices } from "@/api/getServices";
import { getUsers } from "@/api/getUsers";
import { User, Service } from "@/utils/types";
import { create } from "zustand";

interface AppStore {
  users: User[];
  services: Service[];
  addUsers: (users: User[]) => void;
  addServices: (services: Service[]) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  users: getUsers(4, 0),
  services: getServices(4, 0),
  addUsers: (users: User[]) => set((state) => ({ ...state, users: [...state.users, ...users] })),
  addServices: (services: Service[]) => set((state) => ({ ...state, services: [...state.services, ...services] })),
}));

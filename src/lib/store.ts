import { getServices } from "@/api/getServices";
import { getUsers } from "@/api/getUsers";
import { User, Service } from "@/utils/types";
import { create } from "zustand";

interface AppStore {
  users: (User & { interactionCount: number })[];
  services: (Service & { interactionCount: number })[];
  addUsers: (users: (User & { interactionCount: number })[]) => void;
  addServices: (services: (Service & { interactionCount: number })[]) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  users: getUsers(4, 0),
  services: getServices(4, 0),
  addUsers: (users: (User & { interactionCount: number })[]) =>
    set((state) => ({ ...state, users: [...state.users, ...users] })),
  addServices: (services: (Service & { interactionCount: number })[]) =>
    set((state) => ({ ...state, services: [...state.services, ...services] })),
}));

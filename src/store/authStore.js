import { create } from "zustand";

export const useAuthStore = create(
  (set) => ({
    accessToken: undefined,

    setAccessToken: (accessToken) => {
      set((state) => ({ ...state, accessToken: accessToken }));
    },

    clearTokens: () =>
      set((state) => ({
        accessToken: undefined,
      })),
  }),
  {
    name: "auth-storage",
  }
);

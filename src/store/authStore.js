import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState = {
  isAuth: false,
  token: null,
  userType: "",
  userId: "",
};

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,
      clearState: () => {
        set(initialState);
      },
      setAuth: ({ token, isAuth, userType, userId }) =>
        set((state) => ({ ...state, token, isAuth, userType, userId })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

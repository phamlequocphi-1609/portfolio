import { ThemeColor } from "@/types/navbar";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ThemeStore {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme: ThemeColor) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
    }),
    {
      name: "theme-color",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

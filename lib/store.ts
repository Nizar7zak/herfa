import { create } from "zustand";

type State = {
  activeSection: string;
  isHome: boolean;
  setActiveSection: (section: string) => void;
};


export const useSectionStore = create<State>((set) => ({
  activeSection: "الرئيسية",
  isHome: true,
  setActiveSection: (section) =>
    set({
      activeSection: section,
      isHome: section === "الرئيسية",
    }),
}));

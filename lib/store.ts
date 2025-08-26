import { create } from "zustand";
import type { SectionId } from "./sections";

type State = {
  activeSection: SectionId;
  isHome: boolean;
  setActiveSection: (section: SectionId) => void;
};


export const useSectionStore = create<State>((set) => ({
  activeSection: "home",
  isHome: true,
  setActiveSection: (section) =>
    set({
      activeSection: section,
      isHome: section === "home",
    }),
}));

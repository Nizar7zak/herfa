import { create } from "zustand";

type SectionId = "home" | "about" | "process" | "marketing-services" | "creative-services" | "technical-services" | "team" | "experience" | "contact";

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

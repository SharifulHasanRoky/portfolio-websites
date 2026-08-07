"use client";

import { create } from "zustand";

export type View = "home" | "portfolio" | "cases" | "cv";

interface ViewState {
  /** The currently active "page" rendered in the main content area. */
  view: View;
  /** A section ID (e.g. "#story") the home view should scroll to after mount. */
  pendingScroll: string | null;
  /** Switch to a non-home view (or back to home without scrolling). */
  setView: (v: View) => void;
  /** Switch back to home and scroll to a section after the home view mounts. */
  goHomeAndScroll: (sectionId: string) => void;
  /** Clear the pending scroll target once it has been consumed. */
  clearPendingScroll: () => void;
}

export const useViewStore = create<ViewState>((set) => ({
  view: "home",
  pendingScroll: null,
  setView: (v) => set({ view: v, pendingScroll: null }),
  goHomeAndScroll: (sectionId) =>
    set({ view: "home", pendingScroll: sectionId }),
  clearPendingScroll: () => set({ pendingScroll: null }),
}));

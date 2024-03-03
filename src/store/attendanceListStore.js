import { create } from "zustand";

const dateToday = new Date();
const initialState = {
  subjectCode: "",
  date: dateToday,
};

export const useAttendanceListStore = create((set) => ({
  ...initialState,
  setSubjectCode: () =>
    set((newSubjectCode) => ({ subjectCode: newSubjectCode })),
  setDate: ({ date }) => set((state) => ({ ...state, date })),
}));

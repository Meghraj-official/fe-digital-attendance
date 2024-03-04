import { create } from "zustand";

const dateToday = new Date();
const initialState = {
  subjectCode: "",
  date: dateToday,
};

export const useAttendanceListStore = create((set) => ({
  ...initialState,
  setSubjectCode: (data) => {
    console.log("datra from zus", data);

    set((state) => ({ ...state, subjectCode: data }));
  },
  setDate: ({ date }) => set((state) => ({ ...state, date })),
}));

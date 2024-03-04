import axiosInstance from "@/lib/axios";
import { create } from "zustand";

export const useTeacherStore = create((set) => ({
  teacherData: null,
  isLoading: false,
  error: null,
  getTeacher: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/user/showme");
      set({ isLoading: false, teacherData: response.data });
      return response.data;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

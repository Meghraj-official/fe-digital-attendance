import axiosInstance from "@/lib/axios";
import {create} from "zustand";



export const useCourseStore = create((set) => ({
    courses: [],
    isLoading: false,
    error: null,
    getCourses: async () => {
        try {
          set({ isLoading: true });
          const response = await axiosInstance.get("/course/list");
          console.log('response  from ', response)
          set({ isLoading: false, courses: response.data });
          return response.data
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
  }
  
  
  
  
  
  
  ));
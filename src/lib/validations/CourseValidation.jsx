import * as yup from "yup";

export const createCourseSchema = yup.object({
  name: yup.string().required("Course name is Required"),
  code: yup.string().required("Course Code is Required"),
  courseType: yup.string().required("Please choose course type"),
});

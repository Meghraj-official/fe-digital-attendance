import * as yup from "yup";

export const createCourseSchema = yup.object({
  name: yup.string().required("Course Name is Required"),
  code: yup.string().required("Course Code is Required"),
  courseType: yup.string().required("Please Choose Course Type"),
});

export const createSubjectSchema = yup.object({
  name: yup.string().required("Course Name is Required"),
  code: yup.string().required("Course Code is Required"),
  course: yup.string().required("Please Choose Course "),
  semester: yup.string().required("Please Choose Course Type"),
});

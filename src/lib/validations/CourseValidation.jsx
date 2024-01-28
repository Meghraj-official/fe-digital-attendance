import * as yup from "yup";

export const createCourseSchema = yup.object({
  name: yup.string().required("Course Name is Required"),
  code: yup.string().required("Course Code is Required"),
  courseType: yup.string().required("Please Choose Course Type"),
});

export const createSubjectSchema = yup.object({
  name: yup.string().required("Subject Name is Required"),
  code: yup.string().required("Subject Code is Required"),
  course: yup.string().required("Please Choose Course "),
  semester: yup.string().nullable(),
  year: yup.string().nullable(),
});

export const qrFormSchema = yup.object({
  courseCode: yup.string().nullable(),
  section: yup.string().required("Please Choose Section "),
  batch: yup.string().required("Please Choose Batch "),
  subjectCode: yup.string().required("Please Subject Code "),
});

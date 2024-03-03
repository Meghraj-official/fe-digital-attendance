import * as yup from "yup";

export const manualAttendanceSchema = yup.object({
  section: yup
    .string()
    .required("Section is required")
    .length(1)
    .matches(/^[a-zA-Z]+$/, "Section must be a single string"),
  batch: yup.string().required("Please Choose Batch "),
  rollNo: yup
    .number()
    .integer()
    .typeError("Roll number must be a number")
    .required("Please enter student roll no")
    .integer(),
  subjectCode: yup.string().required("Please Subject Code "),
});

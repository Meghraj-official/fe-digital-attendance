import * as yup from "yup";

export const manualAttendanceSchema = yup.object({
  section: yup.string().required("Please Choose Section "),
  batch: yup.string().required("Please Choose Batch "),
  rollNo: yup
    .number()
    .typeError("Roll number must be a number")
    .required("Please enter student roll no"),
  subjectCode: yup.string().required("Please Subject Code "),
});

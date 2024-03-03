/**
 *
 * @param {*} courses
 * @returns  formatted courses
 *
 * label: "Advanced Java",
 * value: "CSC-413"
 */

export const convertToCustomFormat = (courses) => {
  return courses?.map((course) => {
    return {
      label: course?.name,
      value: course?.code,
    };
  });
};

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

export function categorizeCourses(courses) {
  const categorizedCourses = {
    yearly: [],
    semester: [],
  };

  courses.forEach((course) => {
    if (course.courseType === "YEARLY") {
      categorizedCourses.yearly.push(course);
    } else if (course.courseType === "SEMESTER") {
      categorizedCourses.semester.push(course);
    }
  });

  return categorizedCourses;
}

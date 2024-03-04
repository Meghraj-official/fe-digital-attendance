export function AddStatusField(studentArray, idArray) {
  return studentArray.map((student) => {
    const status = idArray.includes(student._id) ? "PRESENT" : "ABSENT";
    return { ...student, status };
  });
}

export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.reduce((acc, studentObj) => acc + studentObj.id, 0);
  }
  return 0;
}

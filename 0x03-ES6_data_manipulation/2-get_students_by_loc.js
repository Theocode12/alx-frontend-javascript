export default function getStudentsByLocation(studentList, city) {
  if (Array.isArray(studentList)) {
    return studentList.filter((studentObj) => studentObj.location === city);
  }
  return [];
}

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (Array.isArray(studentList)) {
    return studentList.filter((studentObj) => studentObj.location === city).map((studentObj) => {
      const newStudentObj = { ...studentObj };
      newGrades.forEach((element) => {
        if (element.studentId === studentObj.id) {
          newStudentObj.grade = element.grade;
        }
        if (!newStudentObj.grade) newStudentObj.grade = 'N/A';
      });
      return newStudentObj;
    });
  }
  return [];
}

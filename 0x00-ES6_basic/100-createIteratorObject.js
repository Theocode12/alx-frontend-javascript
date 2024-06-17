export default function createIteratorObject(report) {
  const iteratorObject = {};
  iteratorObject[Symbol.iterator] = function iterator() {
    const allEmployees = [];
    const employeesList = Object.values(report.allEmployees);
    for (const employees of employeesList) {
      allEmployees.push(...employees);
    }

    return {
      idx: 0,
      next() {
        if (this.idx < allEmployees.length) {
          const obj = { value: allEmployees[this.idx], done: false };
          this.idx += 1;
          return obj;
        }
        return { done: true };
      },
    };
  };

  return iteratorObject;
}

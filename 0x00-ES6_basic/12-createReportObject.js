export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Use spread syntax to copy employeesList
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}

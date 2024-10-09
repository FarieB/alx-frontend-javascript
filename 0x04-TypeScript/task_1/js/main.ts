// main.ts

// Defining the Student interface to describe the structure of a student object
interface Student {
  firstName: string; // The student's first name
  lastName: string;  // The student's last name
}

// Writing the StudentClass that implements the Student interface
class StudentClass implements Student {
  // Defining the properties of the class
  firstName: string; // The student's first name
  lastName: string;  // The student's last name

  // The constructor accepts firstName and lastName as arguments
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName; // Initializing firstName
    this.lastName = lastName;   // Initializing lastName
  }

  // Method that simulates working on homework
  workOnHomework(): string {
    return 'Currently working'; // Returning a status message
  }

  // Method that returns the student's first name
  displayName(): string {
    return this.firstName; // Returning the first name
  }
}

// Creating an instance of StudentClass
const student1 = new StudentClass("Jane", "Smith");

// Logging the student's name and the result of workOnHomework to the console
console.log(student1.displayName()); // Should log: Jane
console.log(student1.workOnHomework()); // Should log: Currently working

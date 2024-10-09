// main.ts

// Defining a string literal type named Subjects
type Subjects = 'Math' | 'History'; // Subjects can only be 'Math' or 'History'

// Creating the teachClass function
function teachClass(todayClass: Subjects): string {
  // Using a conditional statement to determine the class being taught
  if (todayClass === 'Math') {
    return 'Teaching Math'; // Returning a message for Math class
  } else {
    return 'Teaching History'; // Returning a message for History class
  }
}

// Testing the teachClass function
console.log(teachClass('Math')); // Should log: Teaching Math
console.log(teachClass('History')); // Should log: Teaching History

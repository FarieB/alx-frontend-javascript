// Defining the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "Harare",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Bulawayo",
};

// Creating an array of students
const studentsList: Student[] = [student1, student2];

// Creating the table and rendering it to the DOM
const body = document.querySelector('body');
const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

const tableBody = document.createElement('tbody');

// Looping through the student list and creating a row for each student
studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

table.appendChild(tableBody);
body?.appendChild(table);


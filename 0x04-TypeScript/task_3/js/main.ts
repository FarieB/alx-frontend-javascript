// main.ts

/// <reference path="./crud.d.ts" /> // Triple slash directive to include all dependencies

// Importing the RowID and RowElement types from interface.ts
import { RowID, RowElement } from './interface';
// Importing everything from crud.js as CRUD
import * as CRUD from './crud';

// Creating an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Creating a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row); // Calling insertRow

// Creating a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = { ...row, age: 23 }; // Updating row with age

// Calling the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow); // Updating the row
CRUD.deleteRow(newRowID); // Deleting the row

// crud.d.ts

// Importing RowID and RowElement from the interface.ts file
import { RowID, RowElement } from './interface';

// Declaring the functions from crud.js
declare module './crud' {
  export function insertRow(row: RowElement): RowID; // Function to insert a row
  export function deleteRow(rowId: RowID): void;     // Function to delete a row by ID
  export function updateRow(rowId: RowID, row: RowElement): RowID; // Function to update a row by ID
}

// interface.ts

// Creating a type RowID and setting it equal to number
export type RowID = number;

// Creating an interface RowElement with specified fields
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

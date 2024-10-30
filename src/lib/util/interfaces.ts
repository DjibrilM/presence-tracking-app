export interface Employee {
  _id: string;
  firstName: string;
  secondName: string;
  email: string;
  profileImageUrl: string;
  phoneNumber: string;
  salary: number;
  role: "doctor" | "nurse" | "admin" | "staff"; // expand roles as needed
  createdAt: string; // ISO date string, consider using `Date` if you’ll convert it
  updatedAt: string; // ISO date string, consider using `Date` if you’ll convert it
  __v: number;
}

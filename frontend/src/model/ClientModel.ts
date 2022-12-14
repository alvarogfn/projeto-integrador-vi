export interface ClientModel {
  id: string;
  city: string;
  birthdate: number;
  credit: number;
  createdAt: number;
  sex: "F" | "M";
  credit_preferences: string[];
  age: number | string;
}

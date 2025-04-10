
// Define the available subject categories
export type SubjectCategory = "Mock Exams" | "Revision Notes" | "Past Papers" | "Mark Scheme";

// Subject interface definition
export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  topics?: string[]; // Make topics optional but properly defined
}

// PDF interface definition
export interface PDF {
  id: string;
  title: string;
  description: string;
  path: string;
  subject: string;
  category: SubjectCategory;
  dateAdded: string;
}

// Flashcard interface definition
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
}

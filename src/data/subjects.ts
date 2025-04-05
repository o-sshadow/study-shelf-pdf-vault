
export type SubjectCategory = "Mock Exams" | "Revision Notes" | "Past Papers";

export interface Subject {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

// You can customize this list of subjects
export const subjects: Subject[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Numbers, algebra, geometry, and more",
    color: "bg-blue-500",
    icon: "📐"
  },
  {
    id: "english",
    name: "English",
    description: "Literature, language, and writing",
    color: "bg-green-500",
    icon: "📚"
  },
  {
    id: "science",
    name: "Science",
    description: "Physics, chemistry, and biology",
    color: "bg-purple-500",
    icon: "🧪"
  },
  {
    id: "history",
    name: "History",
    description: "Past events and their significance",
    color: "bg-amber-500",
    icon: "🏛️"
  },
  {
    id: "geography",
    name: "Geography",
    description: "Study of places and relationships between people and their environments",
    color: "bg-emerald-500",
    icon: "🌍"
  },
  {
    id: "computerscience",
    name: "Computer Science",
    description: "Programming, algorithms, and computing principles",
    color: "bg-cyan-500",
    icon: "💻"
  }
];

// Define the available categories
export const categories: SubjectCategory[] = [
  "Mock Exams",
  "Revision Notes",
  "Past Papers"
];

// Mockup PDF data (later this could be dynamically loaded)
export interface PDF {
  id: string;
  title: string;
  description: string;
  path: string;
  subject: string;
  category: SubjectCategory;
  dateAdded: string;
}

// Sample PDF data - this would be replaced with dynamic loading or a more complete dataset
export const pdfs: PDF[] = [
  {
    id: "math-mock-1",
    title: "Mathematics Mock Exam 2025 - Paper 1",
    description: "Full mock exam with all topics covered in the syllabus",
    path: "/pdfs/mathematics/mock-exams/math-mock-2025-paper-1.pdf",
    subject: "mathematics",
    category: "Mock Exams",
    dateAdded: "2025-03-15"
  },
  {
    id: "math-notes-algebra",
    title: "Algebra Comprehensive Notes",
    description: "Detailed revision notes covering all algebra topics",
    path: "/pdfs/mathematics/revision-notes/algebra-notes.pdf",
    subject: "mathematics",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "math-past-2024",
    title: "Mathematics Past Paper 2024",
    description: "Official examination paper from 2024",
    path: "/pdfs/mathematics/past-papers/math-2024.pdf",
    subject: "mathematics",
    category: "Past Papers",
    dateAdded: "2025-01-05"
  },
  {
    id: "english-mock-1",
    title: "English Language Mock Exam 2025",
    description: "Complete mock exam for English Language",
    path: "/pdfs/english/mock-exams/english-mock-2025.pdf",
    subject: "english",
    category: "Mock Exams",
    dateAdded: "2025-03-10"
  },
  {
    id: "english-notes-shakespeare",
    title: "Shakespeare Analysis Notes",
    description: "In-depth analysis of Shakespeare's major works",
    path: "/pdfs/english/revision-notes/shakespeare-analysis.pdf",
    subject: "english",
    category: "Revision Notes",
    dateAdded: "2025-02-20"
  },
  {
    id: "science-mock-physics",
    title: "Physics Mock Exam 2025",
    description: "Complete physics mock examination",
    path: "/pdfs/science/mock-exams/physics-mock-2025.pdf",
    subject: "science",
    category: "Mock Exams",
    dateAdded: "2025-03-05"
  },
  {
    id: "history-notes-ww2",
    title: "World War II Comprehensive Notes",
    description: "Detailed notes covering all aspects of WWII",
    path: "/pdfs/history/revision-notes/ww2-notes.pdf",
    subject: "history",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  }
];

// Helper function to get PDFs by subject and category
export function getPDFsBySubjectAndCategory(subjectId: string, category: SubjectCategory): PDF[] {
  return pdfs.filter(pdf => pdf.subject === subjectId && pdf.category === category);
}

// Helper function to get subject by ID
export function getSubjectById(id: string): Subject | undefined {
  return subjects.find(subject => subject.id === id);
}

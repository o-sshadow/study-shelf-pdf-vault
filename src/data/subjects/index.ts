
import { Subject, SubjectCategory } from "../types";

// List of available subjects
export const subjects: Subject[] = [
  {
    id: "chemistry-edexcel",
    name: "Chemistry - Edexcel",
    description: "Chemistry for Edexcel examination board",
    color: "bg-pink-500",
    icon: "⚗️"
  },
  {
    id: "english-aqa",
    name: "English - AQA",
    description: "English literature and language for AQA",
    color: "bg-green-500",
    icon: "📚"
  },
  {
    id: "biology",
    name: "Biology",
    description: "Study of living organisms",
    color: "bg-emerald-500",
    icon: "🧬"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Programming, algorithms, and computing principles",
    color: "bg-cyan-500",
    icon: "💻"
  },
  {
    id: "maths",
    name: "Maths",
    description: "Mathematics including algebra, calculus, and statistics",
    color: "bg-blue-500",
    icon: "🔢"
  },
  {
    id: "physics",
    name: "Physics",
    description: "Study of matter, energy, and the fundamental forces",
    color: "bg-purple-500",
    icon: "⚛️"
  }
];

// Available categories
export const categories: SubjectCategory[] = [
  "Mock Exams",
  "Revision Notes",
  "Past Papers",
  "Mark Scheme"
];

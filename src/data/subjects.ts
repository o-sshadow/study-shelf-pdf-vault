export type SubjectCategory = "Mock Exams" | "Revision Notes" | "Past Papers" | "Mark Scheme";

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
  }
];

// Define the available categories
export const categories: SubjectCategory[] = [
  "Mock Exams",
  "Revision Notes",
  "Past Papers",
  "Mark Scheme"
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

// Sample PDF data based on the actual files in the structure
export const pdfs: PDF[] = [
  // Chemistry - Past Papers
  {
    id: "chem-paper1-questions",
    title: "Chemistry Paper 1 - Question Paper",
    description: "Edexcel Chemistry Paper 1 examination questions",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 1/Question Paper.pdf",
    subject: "chemistry-edexcel",
    category: "Past Papers",
    dateAdded: "2025-01-10"
  },
  {
    id: "chem-paper1-mark-scheme",
    title: "Chemistry Paper 1 - Mark Scheme",
    description: "Edexcel Chemistry Paper 1 examination mark scheme",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 1/Mark Scheme.pdf",
    subject: "chemistry-edexcel",
    category: "Mark Scheme",
    dateAdded: "2025-01-10"
  },
  {
    id: "chem-paper2-questions",
    title: "Chemistry Paper 2 - Question Paper",
    description: "Edexcel Chemistry Paper 2 examination questions",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 2/Question Paper.pdf",
    subject: "chemistry-edexcel",
    category: "Past Papers",
    dateAdded: "2025-01-15"
  },
  {
    id: "chem-paper2-mark-scheme",
    title: "Chemistry Paper 2 - Mark Scheme",
    description: "Edexcel Chemistry Paper 2 examination mark scheme",
    path: "/pdfs/Chemistry - Edexcel/Past Papers/Paper 2/Mark Scheme.pdf",
    subject: "chemistry-edexcel",
    category: "Mark Scheme",
    dateAdded: "2025-01-15"
  },
  
  // Chemistry - Revision Notes (Selected examples)
  {
    id: "chem-atomic-structure",
    title: "Atomic Structure",
    description: "Notes on atomic structure and concepts",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Atomic Structure/pdf.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-01"
  },
  {
    id: "chem-periodic-table",
    title: "Periodic Table",
    description: "Notes covering the periodic table",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Periodic Table/sTVwdr5sN4VVrgSG.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-02"
  },
  {
    id: "chem-ionic-bonding",
    title: "Ionic Bonding",
    description: "Comprehensive notes on ionic bonding",
    path: "/pdfs/Chemistry - Edexcel/Revision Notes/Atomic Structure/Ionic Bonding/qmQk5fC7Pq6MpBvv.pdf",
    subject: "chemistry-edexcel",
    category: "Revision Notes",
    dateAdded: "2025-02-03"
  },
  
  // English - Mock Exams
  {
    id: "english-paper1-mock",
    title: "English Paper 1 Mock Exam",
    description: "AQA English mock examination paper 1",
    path: "/pdfs/English - AQA/Mock Exams/Paper 1.pdf",
    subject: "english-aqa",
    category: "Mock Exams",
    dateAdded: "2025-03-01"
  },
  {
    id: "english-paper2-mock",
    title: "English Paper 2 Mock Exam",
    description: "AQA English mock examination paper 2",
    path: "/pdfs/English - AQA/Mock Exams/Paper 2.pdf",
    subject: "english-aqa",
    category: "Mock Exams",
    dateAdded: "2025-03-02"
  },
  
  // English - Mark Schemes
  {
    id: "english-paper1-mark-scheme",
    title: "English Paper 1 Mark Scheme",
    description: "AQA English paper 1 mark scheme",
    path: "/pdfs/English - AQA/Mark Scheme/Paper1.pdf",
    subject: "english-aqa",
    category: "Mark Scheme",
    dateAdded: "2025-03-05"
  },
  {
    id: "english-paper2-mark-scheme",
    title: "English Paper 2 Mark Scheme",
    description: "AQA English paper 2 mark scheme",
    path: "/pdfs/English - AQA/Mark Scheme/Paper2.pdf",
    subject: "english-aqa",
    category: "Mark Scheme",
    dateAdded: "2025-03-06"
  },
  
  // English - Revision Notes (Selected examples)
  {
    id: "english-macbeth",
    title: "Macbeth Analysis",
    description: "Comprehensive analysis of Shakespeare's Macbeth",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/Macbeth/pdf1.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-10"
  },
  {
    id: "english-romeo-juliet",
    title: "Romeo and Juliet Analysis",
    description: "Study notes for Romeo and Juliet",
    path: "/pdfs/English - AQA/Revision Notes/Shakespeare/Romeo and Juliet/pdf2.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-12"
  },
  {
    id: "english-inspector-calls",
    title: "An Inspector Calls",
    description: "Analysis notes for An Inspector Calls",
    path: "/pdfs/English - AQA/Revision Notes/Modern Texts/An Inspector Calls/pdf9.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-15"
  },
  {
    id: "english-christmas-carol",
    title: "A Christmas Carol",
    description: "Study guide for Dickens' A Christmas Carol",
    path: "/pdfs/English - AQA/Revision Notes/The 19th Century Novel/A Christmas Carol/pdf6.pdf",
    subject: "english-aqa",
    category: "Revision Notes",
    dateAdded: "2025-02-18"
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

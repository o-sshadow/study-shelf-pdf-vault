
import { Subject, SubjectCategory, PDF } from "./types";
import { subjects, categories } from "./subjects";
import { pdfs } from "./pdfs";

// Helper function to get a subject by ID
export function getSubjectById(id: string): Subject | undefined {
  return subjects.find(subject => subject.id === id);
}

// Get PDFs by subject and category
export function getPDFsBySubjectAndCategory(subjectId: string, category: string): PDF[] {
  return pdfs.filter(pdf => pdf.subject === subjectId && pdf.category === category);
}

// Get PDFs by subject
export function getPDFsBySubject(subjectId: string): PDF[] {
  return pdfs.filter(pdf => pdf.subject === subjectId);
}

// Export all types and data
export { Subject, SubjectCategory, PDF, subjects, categories, pdfs };

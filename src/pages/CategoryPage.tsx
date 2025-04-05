
import React from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PDFCard from "@/components/PDFCard";
import { 
  getPDFsBySubjectAndCategory, 
  getSubjectById, 
  SubjectCategory 
} from "@/data/subjects";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { subjectId, categoryName } = useParams<{ subjectId: string; categoryName: string }>();
  
  const subject = getSubjectById(subjectId || "");
  const category = decodeURIComponent(categoryName || "") as SubjectCategory;
  
  const pdfs = getPDFsBySubjectAndCategory(subjectId || "", category);

  if (!subject) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-500">Subject not found</h2>
          <p className="mt-4 mb-8">The subject you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mb-6">
        <Link 
          to={`/subject/${subjectId}`} 
          className="text-study-600 hover:text-study-800 flex items-center gap-1 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to {subject.name}
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {category} - {subject.name}
        </h1>
        <p className="text-lg text-gray-600">
          Browse available {category.toLowerCase()} for {subject.name}
        </p>
      </div>

      {pdfs.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {pdfs.map((pdf) => (
            <PDFCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No resources available</h3>
          <p className="text-gray-600 mb-6">
            There are currently no {category.toLowerCase()} available for {subject.name}.
          </p>
          <Link to={`/subject/${subjectId}`}>
            <Button>Return to {subject.name}</Button>
          </Link>
        </div>
      )}
    </MainLayout>
  );
};

export default CategoryPage;

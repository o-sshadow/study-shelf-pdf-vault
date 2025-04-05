
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PDFViewer from "@/components/PDFViewer";
import { pdfs } from "@/data/subjects";
import { Button } from "@/components/ui/button";

const PDFViewPage = () => {
  const { pdfId } = useParams<{ pdfId: string }>();
  const navigate = useNavigate();
  
  const pdf = pdfs.find(p => p.id === pdfId);

  if (!pdf) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-500">PDF not found</h2>
          <p className="mt-4 mb-8">The PDF you're looking for doesn't exist.</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mb-6">
        <Link 
          to={`/subject/${pdf.subject}/category/${encodeURIComponent(pdf.category)}`}
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
          Back to {pdf.category}
        </Link>
      </div>

      <PDFViewer pdf={pdf} />
    </MainLayout>
  );
};

export default PDFViewPage;

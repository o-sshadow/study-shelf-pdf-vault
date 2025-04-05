
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PDFViewer from "@/components/PDFViewer";
import { pdfs } from "@/data/subjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

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

  // Find next and previous PDFs in the same category and subject
  const sameCategoryPdfs = pdfs.filter(
    p => p.subject === pdf.subject && p.category === pdf.category
  );
  
  const currentIndex = sameCategoryPdfs.findIndex(p => p.id === pdf.id);
  const prevPdf = currentIndex > 0 ? sameCategoryPdfs[currentIndex - 1] : null;
  const nextPdf = currentIndex < sameCategoryPdfs.length - 1 ? sameCategoryPdfs[currentIndex + 1] : null;

  return (
    <MainLayout>
      <div className="mb-6">
        <Link 
          to={`/subject/${pdf.subject}/category/${encodeURIComponent(pdf.category)}`}
          className="text-study-600 hover:text-study-800 flex items-center gap-1 mb-4"
        >
          <ArrowLeft size={20} />
          Back to {pdf.category}
        </Link>
      </div>

      <PDFViewer pdf={pdf} />

      <div className="flex justify-between mt-6">
        {prevPdf ? (
          <Button 
            variant="outline" 
            onClick={() => navigate(`/view-pdf/${prevPdf.id}`)}
            className="flex items-center gap-1"
          >
            <ChevronLeft size={18} />
            Previous: {prevPdf.title}
          </Button>
        ) : (
          <div></div>
        )}
        
        {nextPdf && (
          <Button 
            variant="outline" 
            onClick={() => navigate(`/view-pdf/${nextPdf.id}`)}
            className="flex items-center gap-1"
          >
            Next: {nextPdf.title}
            <ChevronRight size={18} />
          </Button>
        )}
      </div>
    </MainLayout>
  );
};

export default PDFViewPage;

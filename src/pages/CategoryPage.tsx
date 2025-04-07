
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PDFCard from "@/components/PDFCard";
import { 
  getPDFsBySubjectAndCategory, 
  getSubjectById
} from "@/data";
import type { SubjectCategory } from "@/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, FileText, Search } from "lucide-react";

const CategoryPage = () => {
  const { subjectId, categoryName } = useParams<{ subjectId: string; categoryName: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  
  const subject = getSubjectById(subjectId || "");
  const category = decodeURIComponent(categoryName || "") as SubjectCategory;
  
  const allPdfs = getPDFsBySubjectAndCategory(subjectId || "", category);
  
  // Filter PDFs based on search term
  const pdfs = searchTerm 
    ? allPdfs.filter(pdf => 
        pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pdf.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allPdfs;

  if (!subject) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-destructive">Subject not found</h2>
          <p className="mt-4 mb-8">The subject you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mb-8">
        <Link 
          to={`/subject/${subjectId}`} 
          className="text-study inline-flex items-center gap-1 mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to {subject.name}</span>
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 rounded-lg ${subject.color} flex items-center justify-center text-xl shrink-0`}>
            {subject.icon}
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold mb-1">
              {category}
            </h1>
            <p className="text-muted-foreground">
              Browse available {category.toLowerCase()} for {subject.name}
            </p>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={`Search ${category.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-study" />
        <h2 className="text-2xl font-bold">Available Resources</h2>
      </div>

      {pdfs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pdfs.map((pdf) => (
            <PDFCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 rounded-lg border border-border bg-card">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-muted">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No resources found</h3>
          <p className="text-muted-foreground mb-6">
            {searchTerm 
              ? `No ${category.toLowerCase()} match your search for "${searchTerm}".` 
              : `There are currently no ${category.toLowerCase()} available for ${subject.name}.`}
          </p>
          {searchTerm && (
            <Button onClick={() => setSearchTerm("")} className="mb-4">
              Clear search
            </Button>
          )}
          <Link to={`/subject/${subjectId}`}>
            <Button variant={searchTerm ? "outline" : "default"}>
              Return to {subject.name}
            </Button>
          </Link>
        </div>
      )}
    </MainLayout>
  );
};

export default CategoryPage;

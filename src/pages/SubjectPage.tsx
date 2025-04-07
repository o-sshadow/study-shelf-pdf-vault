
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/CategoryCard";
import { categories, getSubjectById, getPDFsBySubjectAndCategory } from "@/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, FolderClosed, Search } from "lucide-react";

const SubjectPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const subject = getSubjectById(subjectId || "");

  // Filter categories based on search term
  const filteredCategories = searchTerm
    ? categories.filter(category =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

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
        <Link to="/" className="text-study inline-flex items-center gap-1 mb-6 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Subjects</span>
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <div className={`w-16 h-16 rounded-xl ${subject.color} flex items-center justify-center text-3xl shrink-0`}>
            {subject.icon}
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">{subject.name}</h1>
            <p className="text-lg text-muted-foreground">{subject.description}</p>
          </div>
        </div>
        
        {/* Topic tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {subject.topics.map((topic) => (
            <div key={topic} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
              {topic}
            </div>
          ))}
        </div>
        
        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <FolderClosed className="h-5 w-5 text-study" />
        <h2 className="text-2xl font-bold">Categories</h2>
      </div>
      
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const resourceCount = getPDFsBySubjectAndCategory(subject.id, category).length;
            return (
              <CategoryCard 
                key={category} 
                category={category} 
                subjectId={subject.id} 
                count={resourceCount}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 rounded-lg border border-border bg-card">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-muted">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No categories found</h3>
          <p className="text-muted-foreground mb-6">
            No categories match your search for "{searchTerm}".
          </p>
          <Button onClick={() => setSearchTerm("")}>
            Clear search
          </Button>
        </div>
      )}
    </MainLayout>
  );
};

export default SubjectPage;

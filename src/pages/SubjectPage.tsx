
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/CategoryCard";
import { categories, getSubjectById, getPDFsBySubjectAndCategory } from "@/data/subjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
        <Link to="/" className="text-study-600 hover:text-study-800 flex items-center gap-1 mb-4">
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
          Back to Subjects
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center text-white text-2xl`}>
            {subject.icon}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
        </div>
        <p className="text-lg text-gray-600 mb-6">{subject.description}</p>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
      
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
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No categories found</h3>
          <p className="text-gray-600 mb-6">
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


import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SubjectCard from "@/components/SubjectCard";
import { subjects } from "@/data/subjects";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter subjects based on search term
  const filteredSubjects = searchTerm
    ? subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : subjects;

  return (
    <MainLayout>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Revision</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Your personal library of study materials organized by subject and category.
          Select a subject to explore available resources.
        </p>
        
        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {filteredSubjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No subjects found</h3>
          <p className="text-gray-600 mb-6">
            No subjects match your search for "{searchTerm}".
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 bg-study-600 text-white rounded-md hover:bg-study-700 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}
    </MainLayout>
  );
};

export default Index;

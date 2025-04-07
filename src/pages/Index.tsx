
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import SubjectCard from "@/components/SubjectCard";
import { subjects } from "@/data/subjects";
import { Input } from "@/components/ui/input";
import { BookOpen, Search } from "lucide-react";

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
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-xl bg-study/10 text-study">
          <BookOpen className="h-6 w-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-study-700 to-study-500 dark:from-study-400 dark:to-study-200">
          Your Study Resource Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Access comprehensive revision materials organized by subject and category.
          Find everything you need to excel in your studies.
        </p>
        
        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-12 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 w-full ring-offset-background focus-visible:ring-study/40 bg-background border-muted-foreground/20"
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
        <div className="text-center py-12 rounded-lg border border-border bg-card">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-muted">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">No subjects found</h3>
          <p className="text-muted-foreground mb-6">
            No subjects match your search for "{searchTerm}".
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 bg-study text-study-foreground rounded-md hover:bg-study-600 transition-colors"
          >
            Clear search
          </button>
        </div>
      )}
    </MainLayout>
  );
};

export default Index;

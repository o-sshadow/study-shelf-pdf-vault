
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import SubjectCard from "@/components/SubjectCard";
import { subjects } from "@/data/subjects";

const Index = () => {
  return (
    <MainLayout>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">StudyShelf PDF Vault</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your personal library of study materials organized by subject and category.
          Select a subject to explore available resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Index;

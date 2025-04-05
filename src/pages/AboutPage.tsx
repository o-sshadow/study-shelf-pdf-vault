
import React from "react";
import MainLayout from "@/components/layout/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About StudyShelf</h1>

        <div className="prose prose-lg">
          <p>
            StudyShelf is a digital library designed to organize and provide easy access to 
            educational PDFs across various subjects. It helps students quickly find and view 
            study materials categorized by subject and resource type.
          </p>

          <h2>How to Use</h2>
          <ol>
            <li>Browse the homepage to select a subject you want to study</li>
            <li>Choose a category (Mock Exams, Revision Notes, or Past Papers)</li>
            <li>Click on any PDF to view it directly in your browser</li>
            <li>Use the fullscreen button for distraction-free reading</li>
          </ol>

          <h2>Adding New Materials</h2>
          <p>
            The system automatically scans designated folders for PDF files and organizes them
            based on the folder structure. If you would like to add new materials, please contact
            the administrator.
          </p>

          <h2>Need Help?</h2>
          <p>
            If you encounter any issues or have questions about using StudyShelf, please reach
            out to our support team.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;

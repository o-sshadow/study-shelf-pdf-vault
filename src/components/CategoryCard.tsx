
import React from "react";
import { Link } from "react-router-dom";
import type { SubjectCategory } from "@/data";

interface CategoryCardProps {
  category: SubjectCategory;
  subjectId: string;
  count: number;
}

const getCategoryIcon = (category: SubjectCategory) => {
  switch (category) {
    case "Mock Exams":
      return "📝";
    case "Revision Notes":
      return "📓";
    case "Past Papers":
      return "📄";
    default:
      return "📁";
  }
};

const getCategoryColor = (category: SubjectCategory) => {
  switch (category) {
    case "Mock Exams":
      return "bg-blue-500";
    case "Revision Notes":
      return "bg-green-500";
    case "Past Papers":
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
};

const CategoryCard = ({ category, subjectId, count }: CategoryCardProps) => {
  return (
    <Link
      to={`/subject/${subjectId}/category/${encodeURIComponent(category)}`}
      className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100 hover:border-study-200"
    >
      <div className={`w-12 h-12 rounded-full ${getCategoryColor(category)} flex items-center justify-center text-white text-2xl mb-4`}>
        {getCategoryIcon(category)}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{category}</h3>
      <p className="text-gray-600">{count} resources available</p>
    </Link>
  );
};

export default CategoryCard;

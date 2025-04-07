
import React from "react";
import { Link } from "react-router-dom";
import type { Subject } from "@/data";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <Link
      to={`/subject/${subject.id}`}
      className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100 hover:border-study-200"
    >
      <div className={`w-12 h-12 rounded-full ${subject.color} flex items-center justify-center text-white text-2xl mb-4`}>
        {subject.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{subject.name}</h3>
      <p className="text-gray-600">{subject.description}</p>
    </Link>
  );
};

export default SubjectCard;

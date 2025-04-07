
import React from "react";
import { Link } from "react-router-dom";
import type { PDF } from "@/data";

interface PDFCardProps {
  pdf: PDF;
}

const PDFCard = ({ pdf }: PDFCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link
      to={`/view-pdf/${pdf.id}`}
      className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100 hover:border-study-200"
    >
      <div className="flex items-start">
        <div className="bg-study-100 text-study-700 p-3 rounded-lg mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1 text-gray-900">{pdf.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{pdf.description}</p>
          <p className="text-gray-500 text-xs">Added: {formatDate(pdf.dateAdded)}</p>
        </div>
      </div>
    </Link>
  );
};

export default PDFCard;

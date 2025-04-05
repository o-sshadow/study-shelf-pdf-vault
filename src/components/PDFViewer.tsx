
import React, { useState } from "react";
import { PDF } from "@/data/subjects";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  pdf: PDF;
}

const PDFViewer = ({ pdf }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className="bg-white p-4 rounded-t-lg shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{pdf.title}</h2>
          <p className="text-gray-600">{pdf.description}</p>
        </div>
        <Button variant="outline" onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </Button>
      </div>
      
      <div className={`bg-gray-100 border rounded-b-lg ${isFullscreen ? 'flex-1' : 'h-[70vh]'}`}>
        <iframe
          src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdf.path)}`}
          title={pdf.title}
          className="w-full h-full rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default PDFViewer;

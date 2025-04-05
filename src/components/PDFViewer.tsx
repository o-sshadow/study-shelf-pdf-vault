
import React, { useState } from "react";
import { PDF } from "@/data/subjects";
import { Button } from "@/components/ui/button";
import { Download, Maximize, Minimize } from "lucide-react";

interface PDFViewerProps {
  pdf: PDF;
}

const PDFViewer = ({ pdf }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = pdf.path;
    link.download = pdf.title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className="bg-white p-4 rounded-t-lg shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{pdf.title}</h2>
          <p className="text-gray-600">{pdf.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          <Button variant="outline" size="sm" onClick={toggleFullscreen}>
            {isFullscreen ? 
              <><Minimize className="h-4 w-4 mr-1" /> Exit Fullscreen</> : 
              <><Maximize className="h-4 w-4 mr-1" /> Fullscreen</>
            }
          </Button>
        </div>
      </div>
      
      <div className={`bg-gray-100 border rounded-b-lg ${isFullscreen ? 'flex-1' : 'h-[70vh]'}`}>
        <iframe
          src={pdf.path}
          title={pdf.title}
          className="w-full h-full rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default PDFViewer;

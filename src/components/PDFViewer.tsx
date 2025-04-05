
import React, { useState } from "react";
import { PDF } from "@/data/subjects";
import { Button } from "@/components/ui/button";
import { Download, Maximize, Minimize, Bookmark, BookmarkPlus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface PDFViewerProps {
  pdf: PDF;
}

const PDFViewer = ({ pdf }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [annotations, setAnnotations] = useState<string[]>(() => {
    const savedAnnotations = localStorage.getItem(`annotations-${pdf.id}`);
    return savedAnnotations ? JSON.parse(savedAnnotations) : [];
  });
  const [newAnnotation, setNewAnnotation] = useState("");
  const navigate = useNavigate();

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

  const addAnnotation = () => {
    if (newAnnotation.trim()) {
      const updatedAnnotations = [...annotations, newAnnotation];
      setAnnotations(updatedAnnotations);
      localStorage.setItem(`annotations-${pdf.id}`, JSON.stringify(updatedAnnotations));
      setNewAnnotation("");
    }
  };

  const removeAnnotation = (index: number) => {
    const updatedAnnotations = annotations.filter((_, i) => i !== index);
    setAnnotations(updatedAnnotations);
    localStorage.setItem(`annotations-${pdf.id}`, JSON.stringify(updatedAnnotations));
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className="bg-white p-4 rounded-t-lg shadow-sm flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{pdf.title}</h2>
          <p className="text-gray-600">{pdf.description}</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-1" />
                Annotations ({annotations.length})
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Annotations for {pdf.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newAnnotation}
                    onChange={(e) => setNewAnnotation(e.target.value)}
                    placeholder="Add a note about this document..."
                    className="flex-1 p-2 border rounded"
                    onKeyDown={(e) => e.key === 'Enter' && addAnnotation()}
                  />
                  <Button onClick={addAnnotation} size="sm">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
                {annotations.length > 0 ? (
                  <div className="max-h-[300px] overflow-y-auto border rounded p-2">
                    {annotations.map((note, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50">
                        <p className="text-sm">{note}</p>
                        <button 
                          onClick={() => removeAnnotation(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-2">No annotations yet</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
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

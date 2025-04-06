
import React, { useState, useEffect } from "react";
import { PDF } from "@/data/subjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Maximize, Minimize, Bookmark, BookmarkPlus, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { PageChangeEvent, DocumentLoadEvent } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface PDFViewerProps {
  pdf: PDF;
}

interface Annotation {
  text: string;
  page: number;
  timestamp: string;
}

interface AnnotationFormValues {
  text: string;
  page: number;
}

const NewPDFViewer = ({ pdf }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isMobile = useIsMobile();
  
  const [annotations, setAnnotations] = useState<Annotation[]>(() => {
    const savedAnnotations = localStorage.getItem(`annotations-${pdf.id}`);
    return savedAnnotations ? JSON.parse(savedAnnotations) : [];
  });
  
  const navigate = useNavigate();

  const form = useForm<AnnotationFormValues>({
    defaultValues: {
      text: "",
      page: currentPage
    }
  });

  // Update form default page value when current page changes
  useEffect(() => {
    form.setValue("page", currentPage);
  }, [currentPage, form]);

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

  const addAnnotation = (formValues: AnnotationFormValues) => {
    if (formValues.text.trim()) {
      const newNote: Annotation = {
        text: formValues.text,
        page: formValues.page,
        timestamp: new Date().toISOString()
      };
      const updatedAnnotations = [...annotations, newNote];
      setAnnotations(updatedAnnotations);
      localStorage.setItem(`annotations-${pdf.id}`, JSON.stringify(updatedAnnotations));
      form.reset({ text: "", page: currentPage });
    }
  };

  const removeAnnotation = (index: number) => {
    const updatedAnnotations = annotations.filter((_, i) => i !== index);
    setAnnotations(updatedAnnotations);
    localStorage.setItem(`annotations-${pdf.id}`, JSON.stringify(updatedAnnotations));
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  // Fix TypeScript error by using the correct event type from the PDF viewer
  const handlePageChange = (e: PageChangeEvent) => {
    setCurrentPage(e.currentPage + 1);
  };

  // Fix TypeScript error by using the correct event type from the PDF viewer
  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    setTotalPages(e.doc.numPages);
  };

  const AnnotationsComponent = () => (
    <>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addAnnotation)} className="space-y-4">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Add a note...`}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="page"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={totalPages || 999}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Add Annotation
            </Button>
          </form>
        </Form>
        
        {annotations.length > 0 ? (
          <div className="max-h-[300px] overflow-y-auto border rounded p-2">
            {annotations.map((note, index) => (
              <div key={index} className="flex justify-between items-start p-2 hover:bg-gray-50 border-b last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-study-100 text-study-800 px-2 py-0.5 rounded">Page {note.page}</span>
                    <span className="text-xs text-gray-500">{formatTimestamp(note.timestamp)}</span>
                  </div>
                  <p className="text-sm mt-1">{note.text}</p>
                </div>
                <button 
                  onClick={() => removeAnnotation(index)}
                  className="text-red-500 hover:text-red-700 ml-2"
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
    </>
  );

  return (
    <div className={`flex flex-col ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <div className="bg-white p-4 rounded-t-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h2 className="text-xl font-bold">{pdf.title}</h2>
          <p className="text-gray-600">{pdf.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Notes ({annotations.length})
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Annotations for {pdf.title}</SheetTitle>
                </SheetHeader>
                <AnnotationsComponent />
              </SheetContent>
            </Sheet>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-1" />
                  Notes ({annotations.length})
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Annotations for {pdf.title}</DialogTitle>
                </DialogHeader>
                <AnnotationsComponent />
              </DialogContent>
            </Dialog>
          )}
          
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
      
      <div className={`bg-gray-100 border rounded-b-lg relative ${isFullscreen ? 'flex-1' : 'h-[70vh]'}`}>
        {/* Ensure the Worker and PDF viewer versions match by setting them explicitly */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div style={{ height: '100%', width: '100%' }}>
            <Viewer 
              fileUrl={pdf.path} 
              onPageChange={handlePageChange}
              onDocumentLoad={handleDocumentLoad}
            />
          </div>
        </Worker>
        
        {/* Page navigation display */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow flex items-center">
            <span className="text-sm font-medium">
              {currentPage} / {totalPages > 0 ? totalPages : '...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPDFViewer;

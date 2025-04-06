
import React, { useState, useEffect, useRef } from "react";
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

const PDFViewer = ({ pdf }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
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

  // Listen for page changes from the PDF iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        // Handle page change messages from PDF.js
        if (event.data.type === 'pagechange') {
          setCurrentPage(event.data.page);
        }
        // Handle total pages information
        if (event.data.type === 'pagesloaded') {
          setTotalPages(event.data.total);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Add script to intercept PDF.js events and enable mobile navigation
  useEffect(() => {
    const injectPageTracking = () => {
      if (iframeRef.current) {
        try {
          const iframe = iframeRef.current;
          iframe.onload = () => {
            // Try to access iframe content after it's loaded
            try {
              const iframeWindow = iframe.contentWindow;
              if (!iframeWindow) return;
              
              // Add script to track page changes and implement mobile navigation
              const script = iframeWindow.document.createElement('script');
              script.textContent = `
                // Wait for PDF.js to be fully loaded
                window.addEventListener('DOMContentLoaded', () => {
                  const interval = setInterval(() => {
                    if (window.PDFViewerApplication && window.PDFViewerApplication.pdfViewer) {
                      clearInterval(interval);
                      
                      // Get total pages
                      const totalPages = window.PDFViewerApplication.pagesCount;
                      window.parent.postMessage({ type: 'pagesloaded', total: totalPages }, '*');
                      
                      // Track page changes
                      window.PDFViewerApplication.eventBus.on('pagechanging', (evt) => {
                        window.parent.postMessage({ type: 'pagechange', page: evt.pageNumber }, '*');
                      });
                      
                      // Fix mobile navigation by improving the touch controls
                      if (window.innerWidth < 768) {
                        // Improve mobile navigation by directly modifying UI elements and adding touch events
                        const viewerContainer = document.getElementById('viewerContainer');
                        const pageNumber = document.getElementById('pageNumber');
                        
                        // Make sure the page input is visible on mobile
                        if (document.getElementById('toolbarViewerMiddle')) {
                          document.getElementById('toolbarViewerMiddle').style.display = 'block';
                          document.getElementById('toolbarViewerMiddle').style.maxWidth = 'none';
                        }
                        
                        // Make page navigation buttons larger and more visible
                        if (document.getElementById('previous')) {
                          document.getElementById('previous').style.width = '3rem';
                          document.getElementById('previous').style.height = '3rem';
                          document.getElementById('previous').style.padding = '0.5rem';
                        }
                        
                        if (document.getElementById('next')) {
                          document.getElementById('next').style.width = '3rem';
                          document.getElementById('next').style.height = '3rem';
                          document.getElementById('next').style.padding = '0.5rem';
                        }
                        
                        // Add custom swipe gesture handling
                        if (viewerContainer) {
                          let startX = 0;
                          let startY = 0;
                          let isScrolling = false;
                          
                          viewerContainer.addEventListener('touchstart', (e) => {
                            startX = e.touches[0].clientX;
                            startY = e.touches[0].clientY;
                            isScrolling = false;
                          }, { passive: true });
                          
                          viewerContainer.addEventListener('touchmove', (e) => {
                            // Detect if user is scrolling vertically
                            if (!isScrolling) {
                              isScrolling = Math.abs(e.touches[0].clientY - startY) > 
                                           Math.abs(e.touches[0].clientX - startX);
                            }
                          }, { passive: true });
                          
                          viewerContainer.addEventListener('touchend', (e) => {
                            const endX = e.changedTouches[0].clientX;
                            const diffX = endX - startX;
                            
                            // Only handle horizontal swipes when not scrolling vertically
                            if (!isScrolling && Math.abs(diffX) > 70) {
                              if (diffX > 0) {
                                // Swipe right - go to previous page
                                window.PDFViewerApplication.page--;
                              } else {
                                // Swipe left - go to next page
                                window.PDFViewerApplication.page++;
                              }
                              e.preventDefault();
                            }
                          });
                        }
                      }
                    }
                  }, 200);
                });
              `;
              iframeWindow.document.head.appendChild(script);
            } catch (error) {
              console.error("Error accessing iframe content:", error);
            }
          };
        } catch (error) {
          console.error("Error setting up iframe:", error);
        }
      }
    };

    injectPageTracking();
  }, []);

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

  const navigatePage = (direction: 'prev' | 'next') => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    
    try {
      const contentWindow = iframeRef.current.contentWindow as any;
      if (contentWindow.PDFViewerApplication) {
        if (direction === 'prev' && currentPage > 1) {
          contentWindow.PDFViewerApplication.page--;
        } else if (direction === 'next' && currentPage < totalPages) {
          contentWindow.PDFViewerApplication.page++;
        }
      }
    } catch (error) {
      console.error("Error navigating pages:", error);
    }
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
              {/* Remove the size property which is causing the TS error */}
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
        <iframe
          ref={iframeRef}
          src={pdf.path}
          title={pdf.title}
          className="w-full h-full rounded-b-lg"
        />
        
        {/* Page navigation controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4">
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigatePage('prev')}
              disabled={currentPage <= 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <span className="mx-2 text-sm font-medium">
              {currentPage} / {totalPages > 0 ? totalPages : '...'}
            </span>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigatePage('next')}
              disabled={currentPage >= totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;

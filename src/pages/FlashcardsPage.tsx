
import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import MainLayout from "@/components/layout/MainLayout";
import { Flashcard } from "@/data/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  FileDown, 
  FileUp, 
  Plus, 
  Trash2, 
  Trash,
  Edit, 
  Save, 
  XCircle, 
  Search,
  FlipHorizontal,
  Menu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const FlashcardsPage = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load flashcards from localStorage on component mount
  useEffect(() => {
    const savedFlashcards = localStorage.getItem("flashcards");
    if (savedFlashcards) {
      try {
        setFlashcards(JSON.parse(savedFlashcards));
      } catch (error) {
        console.error("Error parsing saved flashcards:", error);
        toast.error("Failed to load saved flashcards");
      }
    }
  }, []);

  // Save flashcards to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const handleAddFlashcard = () => {
    if (!question.trim() || !answer.trim()) {
      toast.error("Question and answer cannot be empty");
      return;
    }

    const newFlashcard: Flashcard = {
      id: uuidv4(),
      question: question.trim(),
      answer: answer.trim(),
      createdAt: new Date().toISOString(),
    };

    setFlashcards([...flashcards, newFlashcard]);
    setQuestion("");
    setAnswer("");
    toast.success("Flashcard added");
  };

  const handleDeleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter((card) => card.id !== id));
    toast.success("Flashcard deleted");
  };

  const handleDeleteAllFlashcards = () => {
    setFlashcards([]);
    toast.success("All flashcards deleted");
  };

  const handleEditFlashcard = (card: Flashcard) => {
    setEditingId(card.id);
    setEditQuestion(card.question);
    setEditAnswer(card.answer);
  };

  const handleSaveEdit = (id: string) => {
    if (!editQuestion.trim() || !editAnswer.trim()) {
      toast.error("Question and answer cannot be empty");
      return;
    }

    setFlashcards(
      flashcards.map((card) =>
        card.id === id
          ? { ...card, question: editQuestion.trim(), answer: editAnswer.trim() }
          : card
      )
    );
    setEditingId(null);
    toast.success("Flashcard updated");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleFlipCard = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvText = e.target?.result as string;
        const lines = csvText.split("\n");
        
        // Skip header line
        const dataLines = lines.slice(1).filter(line => line.trim() !== "");
        
        const importedFlashcards: Flashcard[] = dataLines.map((line) => {
          // Handle possible quoted CSV format
          let [question, answer] = ["", ""];
          
          // RegEx to handle CSV format with possible quotes
          const matches = line.match(/("([^"]*)")|([^,]+)/g);
          
          if (matches && matches.length >= 2) {
            question = matches[0].replace(/^"|"$/g, "");
            answer = matches[1].replace(/^"|"$/g, "");
          }

          return {
            id: uuidv4(),
            question: question.trim(),
            answer: answer.trim(),
            createdAt: new Date().toISOString(),
          };
        });

        if (importedFlashcards.length > 0) {
          setFlashcards([...flashcards, ...importedFlashcards]);
          toast.success(`Imported ${importedFlashcards.length} flashcards`);
        } else {
          toast.error("No valid flashcards found in the CSV");
        }
      } catch (error) {
        console.error("Error importing CSV:", error);
        toast.error("Failed to import CSV. Please check the file format");
      }
      
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };
    
    reader.readAsText(file);
  };

  const handleExportCSV = () => {
    if (flashcards.length === 0) {
      toast.error("No flashcards to export");
      return;
    }

    // Create CSV content
    let csvContent = "Question,Answer\n";
    
    flashcards.forEach((card) => {
      // Ensure quotes and commas in the content are properly handled
      const questionFormatted = `"${card.question.replace(/"/g, '""')}"`;
      const answerFormatted = `"${card.answer.replace(/"/g, '""')}"`;
      csvContent += `${questionFormatted},${answerFormatted}\n`;
    });

    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    
    // Create a download link and trigger it
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `flashcards-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success("Exported flashcards to CSV");
  };

  // Filter flashcards based on search term
  const filteredFlashcards = flashcards.filter(
    (card) =>
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFlashcard = filteredFlashcards.length > 0 ? filteredFlashcards[0] : null;

  return (
    <MainLayout>
      <div className="relative h-[calc(100vh-4rem)] w-full">
        <div className="flex h-full">
          {/* Mobile sidebar toggle */}
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden fixed top-20 left-4 z-10 bg-background"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>

          {/* Desktop sidebar */}
          <div className="hidden md:flex w-[300px] border-r h-full flex-col bg-background shadow-sm">
            {renderSidebarContent()}
          </div>

          {/* Mobile sidebar */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="flex items-center">
                  <FlipHorizontal className="mr-2 h-5 w-5 text-study" />
                  <span>Flashcards</span>
                </SheetTitle>
              </SheetHeader>
              <div className="px-2 pt-2">
                {renderSidebarContent()}
              </div>
            </SheetContent>
          </Sheet>

          {/* Main content area with the flashcards */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="max-w-4xl mx-auto h-full flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold text-center mb-8 md:hidden">Flashcards</h1>
              
              {filteredFlashcards.length > 0 ? (
                <div className="w-full max-w-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                      Card {filteredFlashcards.indexOf(currentFlashcard as Flashcard) + 1} of {filteredFlashcards.length}
                    </h2>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleFlipCard(currentFlashcard?.id || "")}
                      >
                        <FlipHorizontal className="h-4 w-4 mr-1" />
                        Flip
                      </Button>
                    </div>
                  </div>

                  {/* Flashcard display */}
                  <Card 
                    className="w-full aspect-[2/1] flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleFlipCard(currentFlashcard?.id || "")}
                  >
                    <CardContent className="p-6 flex items-center justify-center h-full">
                      <div className="text-center max-w-full">
                        {flippedCards[currentFlashcard?.id || ""] ? (
                          <div className="animate-fade-in">
                            <span className="text-sm text-muted-foreground mb-2 block">Answer:</span>
                            <p className="text-2xl">{currentFlashcard?.answer}</p>
                          </div>
                        ) : (
                          <div className="animate-fade-in">
                            <span className="text-sm text-muted-foreground mb-2 block">Question:</span>
                            <p className="text-2xl">{currentFlashcard?.question}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Navigation controls */}
                  <div className="flex justify-between mt-6">
                    <Button 
                      variant="outline"
                      disabled={filteredFlashcards.indexOf(currentFlashcard as Flashcard) === 0}
                    >
                      Previous
                    </Button>
                    <Button 
                      variant="outline"
                      disabled={filteredFlashcards.indexOf(currentFlashcard as Flashcard) === filteredFlashcards.length - 1}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 rounded-lg border border-border bg-card w-full max-w-2xl">
                  <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-muted">
                    <FlipHorizontal className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No flashcards found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm ? 
                      `No flashcards match your search for "${searchTerm}".` : 
                      "You don't have any flashcards yet. Create one or import from CSV."}
                  </p>
                  {searchTerm && (
                    <Button 
                      onClick={() => setSearchTerm("")}
                      variant="outline"
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editing Modal */}
        {editingId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Edit Flashcard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-question">Question</Label>
                  <Textarea
                    id="edit-question"
                    value={editQuestion}
                    onChange={(e) => setEditQuestion(e.target.value)}
                    className="resize-none"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-answer">Answer</Label>
                  <Textarea
                    id="edit-answer"
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    className="resize-none"
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={() => editingId && handleSaveEdit(editingId)}
                  disabled={!editQuestion.trim() || !editAnswer.trim()}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );

  function renderSidebarContent() {
    return (
      <>
        <div className="p-4">
          <div className="hidden md:flex items-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-study/10 text-study">
              <FlipHorizontal className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-bold">Flashcards</h1>
          </div>
          
          <div className="space-y-2 mb-6">
            <Label htmlFor="search-flashcards">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search-flashcards"
                placeholder="Search flashcards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-semibold">Create New Flashcard</h2>
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Textarea
                id="question"
                placeholder="Enter your question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="answer">Answer</Label>
              <Textarea
                id="answer"
                placeholder="Enter the answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="resize-none"
                rows={3}
              />
            </div>
            <Button 
              onClick={handleAddFlashcard} 
              className="w-full"
              disabled={!question.trim() || !answer.trim()}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Flashcard
            </Button>
          </div>
        </div>
        
        <Separator />
        
        <div className="p-4 space-y-4">
          <h2 className="font-semibold">Your Flashcards</h2>
          <p className="text-sm text-muted-foreground">
            Total: {flashcards.length} | Showing: {filteredFlashcards.length}
          </p>
          
          <div className="space-y-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="destructive" 
                  className="w-full"
                  disabled={flashcards.length === 0}
                >
                  <Trash className="mr-2 h-4 w-4" /> Delete All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete all your flashcards.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAllFlashcards}>
                    Delete All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        
        <Separator />
        
        <div className="p-4 space-y-4">
          <h2 className="font-semibold">Import/Export</h2>
          
          <div className="space-y-2">
            <Label htmlFor="csv-import">Import from CSV</Label>
            <p className="text-xs text-muted-foreground mb-2">
              CSV format: "Question" and "Answer" columns
            </p>
            <Input
              id="csv-import"
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleImportCSV}
              className="text-sm"
            />
          </div>
          
          <Button 
            onClick={handleExportCSV} 
            variant="outline" 
            className="w-full"
            disabled={flashcards.length === 0}
          >
            <FileDown className="mr-2 h-4 w-4" /> Export ({flashcards.length})
          </Button>
        </div>
        
        {/* Card list on sidebar */}
        {filteredFlashcards.length > 0 && (
          <>
            <Separator />
            <div className="p-4">
              <h2 className="font-semibold mb-2">All Cards</h2>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {filteredFlashcards.map((card, index) => (
                  <div 
                    key={card.id}
                    className="p-3 border rounded-md hover:bg-accent cursor-pointer flex justify-between items-center"
                  >
                    <div className="truncate flex-1">
                      <span className="font-medium">{index + 1}.</span> {card.question.length > 30 ? 
                        `${card.question.substring(0, 30)}...` : card.question}
                    </div>
                    <div className="flex gap-1 ml-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleEditFlashcard(card)}
                      >
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleDeleteFlashcard(card.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default FlashcardsPage;

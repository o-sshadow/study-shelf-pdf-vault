
import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { saveAs } from "file-saver";
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
  FileDown, 
  FileUp, 
  Plus, 
  Trash2, 
  Edit, 
  Save, 
  XCircle, 
  Search,
  FlipHorizontal
} from "lucide-react";

const FlashcardsPage = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
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
    saveAs(blob, `flashcards-${new Date().toISOString().split("T")[0]}.csv`);
    toast.success("Exported flashcards to CSV");
  };

  // Filter flashcards based on search term
  const filteredFlashcards = flashcards.filter(
    (card) =>
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-study/10 text-study">
            <FlipHorizontal className="h-6 w-6" />
          </div>
          <h1 className="text-4xl font-heading font-bold mb-4">Flashcards</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create, import, and export flashcards to help with your studies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Create flashcard form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Flashcard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleAddFlashcard} 
                className="w-full"
                disabled={!question.trim() || !answer.trim()}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Flashcard
              </Button>
            </CardFooter>
          </Card>

          {/* Import/Export section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileUp className="h-5 w-5" />
                Import & Export
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="csv-import">Import from CSV</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  CSV format should have "Question" and "Answer" columns
                </p>
                <div className="flex items-center gap-2">
                  <Input
                    id="csv-import"
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    onChange={handleImportCSV}
                    className="flex-1"
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Export to CSV</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Download all your flashcards as a CSV file
                </p>
                <Button 
                  onClick={handleExportCSV} 
                  variant="outline" 
                  className="w-full"
                  disabled={flashcards.length === 0}
                >
                  <FileDown className="mr-2 h-4 w-4" /> Export {flashcards.length} Flashcards
                </Button>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="search-flashcards">Search Flashcards</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search-flashcards"
                    placeholder="Search questions and answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flashcards list */}
        <h2 className="text-2xl font-semibold mb-6 mt-10">
          Your Flashcards ({filteredFlashcards.length})
        </h2>
        
        {filteredFlashcards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFlashcards.map((card) => (
              <Card key={card.id} className="relative overflow-hidden">
                {editingId === card.id ? (
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`edit-question-${card.id}`}>Question</Label>
                        <Textarea
                          id={`edit-question-${card.id}`}
                          value={editQuestion}
                          onChange={(e) => setEditQuestion(e.target.value)}
                          className="resize-none"
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edit-answer-${card.id}`}>Answer</Label>
                        <Textarea
                          id={`edit-answer-${card.id}`}
                          value={editAnswer}
                          onChange={(e) => setEditAnswer(e.target.value)}
                          className="resize-none"
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={handleCancelEdit}
                        >
                          <XCircle className="mr-2 h-4 w-4" /> Cancel
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleSaveEdit(card.id)}
                          disabled={!editQuestion.trim() || !editAnswer.trim()}
                        >
                          <Save className="mr-2 h-4 w-4" /> Save
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                ) : (
                  <>
                    <CardContent 
                      className="p-6 cursor-pointer min-h-[12rem] flex items-center justify-center"
                      onClick={() => handleFlipCard(card.id)}
                    >
                      <div className="text-center">
                        {flippedCards[card.id] ? (
                          <div className="animate-fade-in">
                            <span className="text-sm text-muted-foreground mb-2 block">Answer:</span>
                            <p className="text-lg">{card.answer}</p>
                          </div>
                        ) : (
                          <div className="animate-fade-in">
                            <span className="text-sm text-muted-foreground mb-2 block">Question:</span>
                            <p className="text-lg">{card.question}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between border-t p-4">
                      <div className="text-xs text-muted-foreground">
                        {new Date(card.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditFlashcard(card);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteFlashcard(card.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFlipCard(card.id);
                          }}
                        >
                          <FlipHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-lg border border-border bg-card">
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
    </MainLayout>
  );
};

export default FlashcardsPage;

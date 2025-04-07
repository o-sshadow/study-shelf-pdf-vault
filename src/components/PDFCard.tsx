
import React from "react";
import { Link } from "react-router-dom";
import type { PDF } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar } from "lucide-react";

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
    <Link to={`/view-pdf/${pdf.id}`}>
      <Card className="card-hover h-full overflow-hidden border transition-all hover:border-study/30">
        <CardContent className="p-0">
          <div className="flex items-start p-5 gap-4">
            <div className="bg-study/10 text-study dark:bg-study/20 p-3 rounded-xl">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-medium line-clamp-1">{pdf.title}</h3>
                <Badge variant="outline" className="whitespace-nowrap capitalize">
                  {pdf.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1 mb-2">{pdf.description}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatDate(pdf.dateAdded)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PDFCard;

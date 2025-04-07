
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FolderOpen } from "lucide-react";

interface CategoryCardProps {
  category: string;
  subjectId: string;
  count: number;
}

const CategoryCard = ({ category, subjectId, count }: CategoryCardProps) => {
  const encodedCategory = encodeURIComponent(category);

  return (
    <Card className="card-hover overflow-hidden border group transition-all">
      <CardHeader className="p-5 pb-0">
        <div className="bg-study/10 text-study dark:bg-study/20 p-3 rounded-xl w-fit">
          <FolderOpen className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-4">
        <h3 className="text-lg font-medium mb-1">{category}</h3>
        <p className="text-muted-foreground text-sm">
          {count} {count === 1 ? 'resource' : 'resources'} available
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button 
          variant="outline" 
          asChild 
          className="w-full group-hover:border-study group-hover:text-study transition-colors"
        >
          <Link 
            to={`/subject/${subjectId}/category/${encodedCategory}`}
            className="flex justify-between items-center"
          >
            <span>Browse Content</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;

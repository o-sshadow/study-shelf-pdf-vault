
import React from "react";
import { Link } from "react-router-dom";
import type { Subject } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const iconClassName = cn(
    "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4",
    subject.color
  );

  return (
    <Card className="card-hover overflow-hidden border group transition-all">
      <CardHeader className="p-6 pb-0">
        <div className={iconClassName}>
          {subject.icon}
        </div>
        <h3 className="text-xl font-heading font-semibold mb-2">{subject.name}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-3">
        <p className="text-muted-foreground mb-4">{subject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {subject.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="secondary" className="rounded-full">
              {topic}
            </Badge>
          ))}
          {subject.topics.length > 3 && (
            <Badge variant="outline" className="rounded-full">
              +{subject.topics.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full group-hover:bg-study group-hover:text-study-foreground transition-colors">
          <Link to={`/subject/${subject.id}`} className="flex justify-between items-center">
            <span>Explore Subject</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;

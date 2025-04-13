
import { useSurvey } from '@/contexts/SurveyContext';
import { format } from 'date-fns';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Star, StarHalf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const getRatingColor = (rating: string) => {
  const colors: Record<string, string> = {
    'Excellent': 'bg-green-100 text-green-800 hover:bg-green-200',
    'Very Good': 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
    'Good': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'Fair': 'bg-amber-100 text-amber-800 hover:bg-amber-200',
    'Poor': 'bg-red-100 text-red-800 hover:bg-red-200',
  };
  return colors[rating] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
};

const getRatingIcon = (rating: string) => {
  if (rating === 'Excellent' || rating === 'Very Good') {
    return <Star className="inline h-4 w-4 mr-1" />;
  } else if (rating === 'Good') {
    return <StarHalf className="inline h-4 w-4 mr-1" />;
  }
  return null;
};

const SurveyResults = () => {
  const { evaluations, deleteEvaluation } = useSurvey();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Evaluation Results</CardTitle>
        <CardDescription className="text-center">
          View all course feedback submissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        {evaluations.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No evaluations have been submitted yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evaluations.map((evaluation) => (
                  <TableRow key={evaluation.id}>
                    <TableCell className="font-medium">{evaluation.name}</TableCell>
                    <TableCell>
                      <Badge className={getRatingColor(evaluation.rating)}>
                        {getRatingIcon(evaluation.rating)}
                        {evaluation.rating}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {format(new Date(evaluation.submittedAt), 'MMM d, yyyy h:mm a')}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteEvaluation(evaluation.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SurveyResults;

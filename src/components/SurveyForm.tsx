
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSurvey } from '@/contexts/SurveyContext';
import { Rating } from '@/types/survey';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

const ratings: Rating[] = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];

const SurveyForm = () => {
  const { addEvaluation } = useSurvey();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rating, setRating] = useState<Rating | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !rating) return;
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      addEvaluation(name, rating as Rating);
      setName('');
      setRating('');
      setIsSubmitting(false);
      navigate('/results');
    }, 800);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Course Evaluation Survey</CardTitle>
        <CardDescription className="text-center">
          Please share your feedback on this course
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rating">How do you rate this course?</Label>
            <Select
              value={rating}
              onValueChange={(value) => setRating(value as Rating)}
              required
            >
              <SelectTrigger id="rating" className="w-full">
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                {ratings.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !name || !rating}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Evaluation'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;

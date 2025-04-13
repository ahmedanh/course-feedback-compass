
export interface Evaluation {
  id: string;
  name: string;
  rating: string;
  submittedAt: string;
}

export type Rating = 'Excellent' | 'Very Good' | 'Good' | 'Fair' | 'Poor';

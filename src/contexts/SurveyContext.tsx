
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Evaluation, Rating } from '@/types/survey';
import { useToast } from '@/hooks/use-toast';

interface SurveyContextType {
  evaluations: Evaluation[];
  addEvaluation: (name: string, rating: Rating) => void;
  deleteEvaluation: (id: string) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};

interface SurveyProviderProps {
  children: ReactNode;
}

export const SurveyProvider = ({ children }: SurveyProviderProps) => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>(() => {
    const savedData = localStorage.getItem('surveyEvaluations');
    return savedData ? JSON.parse(savedData) : [];
  });
  
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('surveyEvaluations', JSON.stringify(evaluations));
  }, [evaluations]);

  const addEvaluation = (name: string, rating: Rating) => {
    const newEvaluation: Evaluation = {
      id: Date.now().toString(),
      name,
      rating,
      submittedAt: new Date().toISOString(),
    };

    setEvaluations([newEvaluation, ...evaluations]);
    
    toast({
      title: "Evaluation Submitted",
      description: `Thank you, ${name}, for your feedback!`,
    });
  };

  const deleteEvaluation = (id: string) => {
    setEvaluations(evaluations.filter(evaluation => evaluation.id !== id));
    
    toast({
      title: "Evaluation Deleted",
      description: "The evaluation has been removed successfully.",
    });
  };

  return (
    <SurveyContext.Provider value={{ evaluations, addEvaluation, deleteEvaluation }}>
      {children}
    </SurveyContext.Provider>
  );
};

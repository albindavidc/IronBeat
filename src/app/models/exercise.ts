export interface Exercise {
  id: number;
  name: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  muscleGroups: string[];
  steps: string[];
}

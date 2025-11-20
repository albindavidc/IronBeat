import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exercise } from './models/exercise';
import { EXERCISES } from './data/exercises';
import { ExerciseListComponent } from './components/exercise-list/exercise-list';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ExerciseListComponent, ExerciseDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'IronBeat';
  exercises: Exercise[] = EXERCISES;
  selectedExercise: Exercise | null = null;
  filterDifficulty: string = 'All';

  get filteredExercises(): Exercise[] {
    if (this.filterDifficulty === 'All') {
      return this.exercises;
    }
    return this.exercises.filter(ex => ex.difficulty === this.filterDifficulty);
  }

  onSelectExercise(exercise: Exercise) {
    this.selectedExercise = exercise;
    window.scrollTo(0, 0);
  }

  onBack() {
    this.selectedExercise = null;
  }
}

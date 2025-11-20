import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise';
import { ExerciseCardComponent } from '../exercise-card/exercise-card';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [CommonModule, ExerciseCardComponent],
  templateUrl: './exercise-list.html',
  styleUrl: './exercise-list.css'
})
export class ExerciseListComponent {
  @Input() exercises: Exercise[] = [];
  @Output() exerciseSelected = new EventEmitter<Exercise>();

  onSelect(exercise: Exercise) {
    this.exerciseSelected.emit(exercise);
  }
}

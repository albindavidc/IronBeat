import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.css'
})
export class ExerciseCardComponent {
  @Input() exercise!: Exercise;
  @Output() select = new EventEmitter<Exercise>();

  onSelect() {
    this.select.emit(this.exercise);
  }

  get difficultyClass(): string {
    return this.exercise.difficulty.toLowerCase();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise';

@Component({
  selector: 'app-exercise-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-detail.html',
  styleUrl: './exercise-detail.css'
})
export class ExerciseDetailComponent {
  @Input() exercise!: Exercise;
  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }

  get difficultyClass(): string {
    return this.exercise.difficulty.toLowerCase();
  }
}

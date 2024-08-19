import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit, OnChanges {
  @Input() task: Task | null = null;
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() editCancelled = new EventEmitter<void>();

  editedTask: Task | null = null;

  ngOnInit() {
    this.updateEditedTask();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.updateEditedTask();
    }
  }

  updateEditedTask() {
    if (this.task) {
      this.editedTask = { ...this.task };
      this.editedTask.dueDate = this.formatDate(this.task.dueDate);
    } else {
      this.editedTask = null;
    }
  }

  formatDate(date: string | Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  saveTask() {
    if (this.editedTask) {
      this.taskUpdated.emit(this.editedTask);
    }
  }

  cancelEdit() {
    this.editCancelled.emit();
  }
}

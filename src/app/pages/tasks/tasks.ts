import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../../components/add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatButtonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent {
  constructor(private dialog: MatDialog) {}

  tasks = [
    { title: 'Design UI', status: 'Completed' },
    { title: 'Build Task Table', status: 'Pending' },
    { title: 'Add Dialog', status: 'Pending' }
  ];

  openDialog() {
    this.dialog.open(AddTaskDialogComponent);
  }
}
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { TasksComponent } from './pages/tasks/tasks';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'tasks', component: TasksComponent }
];
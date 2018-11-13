import { Question2Component } from './question2/question2.component';
import { Question1Component } from './question1/question1.component';
import { RouterModule } from '@angular/router';
export const AppRouting = RouterModule.forRoot([
    { path: '', pathMatch: 'full', redirectTo: 'question-1' },
    { path: 'question-1', component: Question1Component },
    { path: 'question-2', component: Question2Component },
]);
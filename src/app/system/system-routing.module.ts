import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';

import {IdCandidateComponent} from './id-candidate/id-candidate.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {InterviewComponent} from './interview/interview.component';
import {UserCabinetComponent} from './user-cabinet/user-cabinet.component';
import {AuthGuard} from '../shared/services/auth.guard';



const appRoutes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'candidate', component: IdCandidateComponent}, /*TODO полагаю, что роут собой должен представлять candidate-id?1,2,n,...*/
      {path: 'interview', component: InterviewComponent},
      {path: 'vacancies', component: VacanciesComponent},
      {path: 'user-cabinet', component: UserCabinetComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}

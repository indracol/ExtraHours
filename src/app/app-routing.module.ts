import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraHoursApprovalComponent } from './components/extra-hours-approval/extra-hours-approval.component';
import { ExtraHoursComponent } from './components/extra-hours/extra-hours.component';
import { FormHoursComponent } from './components/forms/form-hours/form-hours.component';

const routes: Routes = [
  {path: 'extraHours', component: ExtraHoursComponent},
  {path: 'extraHoursApproval', component: ExtraHoursApprovalComponent},
  {path: 'extraHours/forms', component: FormHoursComponent},
  {path: 'extraHours/forms/:id', component: FormHoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

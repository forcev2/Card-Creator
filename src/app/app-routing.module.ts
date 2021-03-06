import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityCreatorComponent } from './components/ability-creator/ability-creator.component';
import { AdminCardApprovalComponent } from './components/admin-card-approval/admin-card-approval.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { VoteComponent } from './components/vote/vote.component';


const routes: Routes = [
  { path: 'card-creator', component: CardCreatorComponent },
  { path: 'confirm-modal', component: ConfirmModalComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'info-card', component: InfoCardComponent },
  { path: 'admin-card', component: AdminCardApprovalComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityCreatorComponent } from './components/ability-creator/ability-creator.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { VoteComponent } from './components/vote/vote.component';


const routes: Routes = [
  { path: 'card-creator', component: CardCreatorComponent },
  { path: 'confirm-modal', component: ConfirmModalComponent },
  { path: 'vote', component: VoteComponent },
  { path: '', component: AbilityCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

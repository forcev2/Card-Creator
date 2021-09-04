import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityCreatorComponent } from './components/ability-creator/ability-creator.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';


const routes: Routes = [
  { path: 'card-creator', component: CardCreatorComponent },
  { path: '', component: AbilityCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

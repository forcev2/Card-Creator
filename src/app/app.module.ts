import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { AbilityCreatorComponent } from './components/ability-creator/ability-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCreatorComponent,
    CardComponent,
    AbilityCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

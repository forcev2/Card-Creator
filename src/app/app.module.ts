import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCreatorComponent } from './components/card-creator/card-creator.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { AbilityCreatorComponent } from './components/ability-creator/ability-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { NgbAccordion, NgbAccordionModule, NgbCollapseModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { VoteComponent } from './components/vote/vote.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { AdminCardApprovalComponent } from './components/admin-card-approval/admin-card-approval.component';
import { AdminInfoModalClickComponent } from './components/admin-info-modal-click/admin-info-modal-click.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCreatorComponent,
    CardComponent,
    AbilityCreatorComponent,
    ConfirmModalComponent,
    VoteComponent,
    SmallCardComponent,
    InfoCardComponent,
    AdminCardApprovalComponent,
    AdminInfoModalClickComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    NgbModule,
    NgbModalModule,
    NgbAccordionModule,
    NgbCollapseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AbilityCreatorComponent,
    ConfirmModalComponent,
    InfoCardComponent,
    AdminInfoModalClickComponent,
    RegisterComponent],
  exports: [
    MatSlideToggleModule,
  ]
})
export class AppModule { }

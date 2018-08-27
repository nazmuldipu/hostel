import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PicDialogComponent } from './components/pic-dialog/pic-dialog.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { IndexComponent } from './containers/index/index.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgbModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    IndexComponent,
    TopHeaderComponent,
    NavbarComponent,
    PicDialogComponent,
    FeatureComponent,
    FooterComponent,
    ApplicationFormComponent,
    ContactComponent
  ]
})
export class HomeModule {}

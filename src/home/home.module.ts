import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { RouterModule, Routes } from '@angular/router';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [IndexComponent]
})
export class HomeModule {}

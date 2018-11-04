import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/custmgmt/custmgmt.module#CustmgmtModule'
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }

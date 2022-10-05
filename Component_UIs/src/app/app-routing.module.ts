import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BadgeTestComponent } from './components/badge-test/badge-test.component';
import { FormDataTestComponent } from './components/form-data-test/form-data-test.component';
const routes: Routes = [
  { path: 'bottom-sheet', component: BottomSheetComponent},
  { path: 'badge-test', component: BadgeTestComponent},
  { path: 'form-data-test', component: FormDataTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatBadgeModule} from '@angular/material/badge';
import {MaterialExampleModule} from './material.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatCardHarness} from '@angular/material/card/testing';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { formatDate } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormDataTestComponent } from './components/form-data-test/form-data-test.component';
import {MatIconModule} from '@angular/material/icon';
import { InputTestComponent } from './components/input-test/input-test.component';
import {MatInputModule} from '@angular/material/input';
import { ListTestComponent } from './components/list-test/list-test.component';
import {MatListModule} from '@angular/material/list';
import { SelectTestComponent } from './components/select-test/select-test.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import { SlideTestComponent } from './components/slide-test/slide-test.component';
import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import {MatTableModule} from '@angular/material/table';
import { TableTestComponent } from './components/table-test/table-test.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TreeTestComponent } from './components/tree-test/tree-test.component';
import {MatTreeModule} from '@angular/material/tree';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { BadgeTestComponent } from './components/badge-test/badge-test.component';



 
@NgModule({
  declarations: [AppComponent, FormDataTestComponent, InputTestComponent, ListTestComponent, SelectTestComponent, SlideTestComponent, StepperComponent, TableTestComponent, TreeTestComponent, BottomSheetComponent, BadgeTestComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

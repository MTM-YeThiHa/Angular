import { Component, ElementRef, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatCalendar } from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';
import {Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface Task {
    name: String;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'my-first-project';

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
        {name: 'Primary', completed: false, color: 'primary'},
        {name: 'Accent', completed: false, color: 'accent'},
        {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t=> t.completed);
  }

  someCompleted(): boolean {
    if (this.task.subtasks == null) {
        return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
        return;
    }
    this.task.subtasks?.forEach(t => (t.completed = completed));
  }

  //chips-autocomplete-example tutorial

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Banana'];
  allFruits: string[] = ['Apple', 'Orange', 'Lemon', 'Strawberry', 'Lime'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>; 

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add( event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if(value) {
      this.fruits.push(value);
    }
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if ( index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLocaleLowerCase().includes(filterValue));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppService } from '../app.service';

@Component({
  selector: 'example-form',
  styleUrls: ['form.component.scss'],
  templateUrl: 'form.component.html'
})

export class ExampleFormComponent implements OnInit {
  states: string[] = [];
  filteredStates: any;
  formCtrl: FormControl;
  seasons: string[];
  isLoading: boolean = false;

  constructor(
    private appService: AppService,
  ) {
    this.formCtrl = new FormControl();
    this.seasons = [
      'Winter',
      'Spring',
      'Summer',
      'Autumn',
    ];
    this.states = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ];
    this.filteredStates = this.formCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  public ngOnInit() {

  }

  filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
      : this.states;
  }

  submitForm(): void {
    this.isLoading = !this.isLoading;
    this.appService.setLoading(this.isLoading);
  }
}

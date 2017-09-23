import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppService } from '../app.service';

import * as _ from 'lodash';

@Component({
  selector: 'example-form',
  styleUrls: ['form.component.scss'],
  templateUrl: 'form.component.html'
})

export class ExampleFormComponent {
  public auto: any;
  public states: string[] = [];
  public state: any;
  public filteredStates: any;
  public formCtrl: FormControl;
  public seasons: string[];
  public isLoading: boolean = false;
  public chksValue: any = {};
  public selectedValue: any;
  public radioValue: any;
  public slideChecked: boolean;

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
    _.each(this.seasons, (item: any) => {
      this.chksValue[item] = false;
    });
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
      .map((name: string) => this.filterStates(name));
  }

  public filterStates(val: string) {
    return val ? this.states.filter((s: any) => new RegExp(`^${val}`, 'gi').test(s))
      : this.states;
  }

  public submitForm(): void {
    this.isLoading = !this.isLoading;
    this.appService.setLoading(this.isLoading);
  }
}

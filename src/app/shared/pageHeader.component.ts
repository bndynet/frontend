import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-page-header',
  styleUrls: ['pageHeader.component.scss'],
  templateUrl: 'pageHeader.component.html',
})

export class SharedPageHeaderComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;

  constructor(

  ){}

  public  ngOnInit () {}
}

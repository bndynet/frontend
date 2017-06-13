import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-page-header',
  styleUrls: ['pageHeader.component.scss'],
  templateUrl: 'pageHeader.component.html',
})

export class SharedPageHeaderComponent implements OnInit {
  @Input()
  @Output()
  public title: string;
  @Input()
  @Output()
  public subtitle: string;

  constructor(

  ){}

  public  ngOnInit () {}
}

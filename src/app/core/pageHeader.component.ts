import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-page-header',
  styleUrls: ['pageHeader.component.scss'],
  templateUrl: 'pageHeader.component.html',
})

export class CorePageHeaderComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;

  constructor(

  ){}

  public  ngOnInit () {}
}

import { Component, OnInit, Input, Output } from '@angular/core';
import { AppService } from '../app.service';

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
    private appService: AppService
  ) {

  }

  public ngOnInit() {
    this.appService.pageTitleChangeEvent.subscribe((args: any) => {
      this.title = args.title;
      this.subtitle = args.subtitle;
    });
  }
}

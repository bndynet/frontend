import {
  Component,
} from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'example-article',
  styleUrls: ['article.component.scss'],
  templateUrl: 'article.component.html'
})
export class ExampleArticleComponent {

  constructor(
    private appService: AppService,
  ) {
    this.appService.setPageTitle('Article');
  }
}

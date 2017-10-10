import { Component } from '@angular/core';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { AppService } from '../app.service';

@Component({
  selector: 'example-editor',
  templateUrl: 'editor.component.html'
})

export class ExampleEditorComponent {
  public editorContent: string = 'Type something';
  public editorOptions: object;

  constructor(
    private appService: AppService,
  ) {
    this.appService.setPageTitle('Html Editor', 'WYSIWYG Editor');
    this.editorOptions = this.appService.config.getWysiwygEditorOptions();
  }
}

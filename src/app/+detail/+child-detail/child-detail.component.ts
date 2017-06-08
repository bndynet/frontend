import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`ChildDetail` component loaded asynchronously');

@Component({
  selector: 'child-detail',
  template: `
    <div class="page-body">
       Hello from Child
    </div>
  `,
})
export class ChildDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}

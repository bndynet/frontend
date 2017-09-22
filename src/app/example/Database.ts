import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppService } from '../app.service';
import { UserData } from './UserData';

export class ExampleDatabase {
  public dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(
    private appService: AppService,
  ) {
    this.appService.getArticles().then((res) => {
      this.dataChange.next(res);
    });
  }

  public addArticle() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewArticle());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewArticle() {
    return {
      title: Math.random().toString(),
      content: Math.round(Math.random() * 100).toString(),
      createdAt: new Date(),
    };
  }
}

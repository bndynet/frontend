import { Output, Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';

import 'rxjs/add/operator/toPromise';

import { IAppConfigInfo, AppConfig, Environment } from './app.config';
import { mainMenus, sideMenus } from './app.menu';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppService {

  public config: IAppConfigInfo;
  @Output() public loadEvent: EventEmitter<boolean> = new EventEmitter(true);

  constructor(
    private http: Http,
    private snackBar: MdSnackBar,
  ) {
    this.config = new AppConfig().currentConfig;
  }

  public setLoading(value: boolean): void {
    this.loadEvent.emit(value);
  }

  public search(keywords: string): void {
    this.info(`TODO: search "${keywords}"`);
  }

  public getMainMenus(): any[] {
    const result: any[] = [];
    for (const item of mainMenus) {
      if (item.url && item.url.toLowerCase().startsWith('http')) {
        item['isExternal'] = true;
      }
      if (item.icon && item.icon.toLowerCase().startsWith('img:')) {
        item['hasImage'] = true;
        item.icon = item.icon.replace('img:', '');
      }
      result.push(item);
    }
    return result;
  }

  public getSideMenus(): any[] {
    return sideMenus;
  }

  public getArticles(): Promise<any[]> {
    return new Promise((resolve) => {
      const articles = [];
      for(let i = 0; i< 122; i++) {
        articles.push({
          id: i,
          title: `About repository languages`,
          content: `The files and directories within a repository determine the languages that make up the repository. You can view a repository's languages to get a quick overview of the repository. GitHub uses the open source Linguist library to determine file languages for syntax highlighting and repository statistics. Language statistics will update after you push changes to your default branch (which is usually master). Some files are hard to identify, and sometimes projects contain more library and vendor files than their primary code. If you're receiving incorrect results, please consult the Linguist troubleshooting guide for help.`,
          createdAt: new Date(),
        });
      }
      resolve(articles);
    });
  }

  public info(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['info'],
      duration: this.config.infoDuration,
    });
  }

  public success(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['success'],
      duration: this.config.successDuration,
    });
  }

  public warning(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['warning'],
      duration: this.config.warningDuration,
    });
  }

  public error(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['error'],
      duration: this.config.errorDuration,
    });
  }
}

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  /**
   * Already return a clone of the current state.
   */
  public get state() {
    return this._state = this._clone(this._state);
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new ReferenceError('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify( object ));
  }
}

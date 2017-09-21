import { Output, Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';

import 'rxjs/add/operator/toPromise';

import { IAppConfigInfo, AppConfig, Environment } from "./app.config";

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppService {

  @Output() loadEvent: EventEmitter<boolean> = new EventEmitter(true);

  public config: IAppConfigInfo;

  constructor(
    private http: Http,
    private snackBar: MdSnackBar,
  ){
    this.config = new AppConfig(Environment.prod).currentConfig;
  }

  setLoading(value: boolean): void {
    this.loadEvent.emit(value);
  }

  getMainMenus(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then((res: any) => res.json().mainMenus);
  }

  getSideMenus(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then((res: any) => res.json().sideMenus);
  }

  getArticles(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then((res: any) => res.json().articles);
  }

  info(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['info'],
      duration: this.config.infoDuration,
    });
  }

  success(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['success'],
      duration: this.config.successDuration,
    });
  }

  warning(msg: string): MdSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(msg, 'x', {
      extraClasses: ['warning'],
      duration: this.config.warningDuration,
    });
  }

  error(msg: string): MdSnackBarRef<SimpleSnackBar> {
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
    throw new Error('do not mutate the `.state` directly');
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

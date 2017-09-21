import * as _ from 'lodash';

import { config } from './config/config';
import { config_dev } from './config/config.dev';
import { config_prod } from './config/config.prod';

export interface IAppConfigInfo {
  host?: string;
  apiEndpoint?: string;
  infoDuration?: number;
  successDuration?: number;
  warningDuration?: number;
  errorDuration?: number;
}

export enum Environment {
  dev,
  prod,
};

export class AppConfig {

  private configs: Object = {
    dev: _.assignIn({}, config, config_dev),
    prod: _.assignIn({}, config, config_prod)
  };
  public currentConfig: IAppConfigInfo;

  constructor(env?: Environment) {
    if (env) {
      this.currentConfig = this.configs[Environment[env]] as IAppConfigInfo;
    } else {
      const host = window.location.host.toLowerCase();
      for(const key in this.configs) {
        if (host === this.configs[key].host.toLowerCase()) {
          this.currentConfig = this.configs[key];
          break;
        }
      }
    }
  }
}

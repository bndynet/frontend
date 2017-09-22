import * as _ from 'lodash';

import { config } from './config/config';
import { configDev } from './config/config.dev';
import { configProd } from './config/config.prod';

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
}

export class AppConfig {
  public currentConfig: IAppConfigInfo;
  private configs: object = {
    dev: _.assignIn({}, config, configDev),
    prod: _.assignIn({}, config, configProd),
  };

  constructor(env?: Environment) {
    if (env) {
      this.currentConfig = this.configs[Environment[env]] as IAppConfigInfo;
    } else {
      const host = window.location.host.toLowerCase();
      for (const key in this.configs) {
        if (host === this.configs[key].host.toLowerCase()) {
          this.currentConfig = this.configs[key];
          break;
        }
      }
    }
  }
}

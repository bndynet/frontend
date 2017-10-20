import * as _ from 'lodash';

import { config } from './config/config';
import { configDev } from './config/config.dev';
import { configProd } from './config/config.prod';

interface IEditorOptions {
  height: number;
  charCounterCount: boolean;
  toolbarButtons: string[];

  imageUploadParam: string;
  imageUploadURL: string;
  imageUploadParams: object;
  imageUploadMethod: string;
  imageMaxSize: number;
  imageAllowedTypes: string[];
  imageManagerLoadURL: string;

  fileUploadURL: string;
  fileAllowedTypes: string[];
  fileMaxSize: number;
  fileUploadMethod: string;
  fileUploadParam: string;
  fileUploadParams: object;
  fileUseSelectedText: boolean;
}

export interface IAppConfigInfo {
  host?: string;
  apiEndpoint?: string;
  infoDuration?: number;
  successDuration?: number;
  warningDuration?: number;
  errorDuration?: number;
  editorOptions?: IEditorOptions;
}

export enum Environment {
  dev,
  prod,
}

export class AppConfig {
  public configInfo: IAppConfigInfo;
  private configs: object = {
    dev: _.assignIn({}, config, configDev),
    prod: _.assignIn({}, config, configProd),
  };

  constructor(env?: Environment) {
    if (env) {
      this.configInfo = this.configs[Environment[env]] as IAppConfigInfo;
    } else {
      const host = window.location.host.toLowerCase();
      for (const key in this.configs) {
        if (this.configs.hasOwnProperty(key)) {
          const hosts = this.configs[key].host.replace(' ', '').toLowerCase().split(';');
          if (hosts.indexOf(host) >= 0) {
            this.configInfo = this.configs[key];
            break;
          }
        }
      }
    }

    if (!this.configInfo) {
      this.configInfo = this.configs['dev'];
    }
  }

  public getWysiwygEditorOptions(): object {
    return this.configInfo.editorOptions;
  }
}

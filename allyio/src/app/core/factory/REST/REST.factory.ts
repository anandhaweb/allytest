import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from  '@angular/core';

import * as jquery from 'jquery';

@Injectable({
  providedIn: 'root'
})

export class RESTFactory {
  private RESTConfig;

  constructor(private http: HttpClient) {
    this.RESTConfig = {
      headers: {}
    };
  }

  config(fn) {
    fn({
      setHeader: (headers) => {
        jquery.extend(true, this.RESTConfig.headers, headers);
      }
    });
  }

  getOptions(uberOptions, overideOptions) {
    const options = {
      headers: {}
    };

    jquery.extend(true, options, this.RESTConfig, uberOptions, overideOptions);
    options.headers = new HttpHeaders(options.headers);

    return options;
  }

  for(config, uberOptions) {
    switch (config.method) {
      case 'GET':
        return (overideOptions) => {
          return this.http.get(config.url, this.getOptions(uberOptions, overideOptions));
        }; 
    }
  }
}

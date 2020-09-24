import { Injectable } from '@angular/core';
 import { UrlService } from '../../core/services/url.service';
import { RESTFactory } from '../../core/factory/REST/REST.factory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   public okr;
    constructor(private restFactory: RESTFactory) {
        this.okr = this.restFactory.for({url: UrlService.OKR, method: 'GET'}, {});
    }
}

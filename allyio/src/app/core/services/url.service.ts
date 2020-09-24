import { environment } from '../../../environments/environment';

class UrlServiceClass {
  public OKR: string = environment.accountEndpoint + 'sample-okrs/db.json';
  constructor() {
  }
}

 export let UrlService = new UrlServiceClass();

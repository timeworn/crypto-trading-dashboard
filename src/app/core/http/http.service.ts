import * as _                      from 'lodash';
import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }              from 'rxjs/Observable';

// Environment data
import { environment } from 'app/../environments/environment';

// Interfaces
import { CoinData } from 'app/state/coins/coins.model';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getCoinsStats(): Observable<any> {
    return this.http.get(environment.dataUrl);
  }
}

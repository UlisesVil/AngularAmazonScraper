import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const backendUrl= 'http://localhost:3000';

@Injectable({
  providedIn:'root'
})
export class GetProductsService {

  constructor(
    private _http: HttpClient,
  ){  }

  getProducts(url): Observable<any>{
    let params= JSON.stringify(url);
    console.log(params);

    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(backendUrl+'/getproducts',params,{headers:headers});
  }
}


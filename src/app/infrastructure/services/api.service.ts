import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // IT PROVIDES HEADERS OPTIONS FOR OUR HTTP REQUESTS
  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    })
  };

  // DEPENDENCY INJECTION OF HTTPCLIENT CLASS 
  constructor(private _http: HttpClient) {
  }

  public get(endpoint): Observable<any> {
    // THIS METHOD TAKE A ENDPOINT AND SUBMIT A GET VERB BASED ON HTTP PROTOCOL

    // THIS WILLRETURN A OBSERVALE OBJECT CAN BE SUBSCRIBE BY IT'S INVOKED IMPLEMENTATION
    return this._http.get(endpoint, this._httpOptions);
  }
  
  public post(endpoint, data) {
    // THIS METHOD TAKE A ENDPOINT AND SUBMIT A POST VERB BASED ON HTTP PROTOCOL

    // THIS WILLRETURN A OBSERVALE OBJECT CAN BE SUBSCRIBE BY IT'S INVOKED IMPLEMENTATION
    return this._http.post(endpoint, data, this._httpOptions);

  }
  public delete(endpoint) {
    // THIS METHOD TAKE A ENDPOINT AND SUBMIT A DELETE VERB BASED ON HTTP PROTOCOL

    // THIS WILLRETURN A OBSERVALE OBJECT CAN BE SUBSCRIBE BY IT'S INVOKED IMPLEMENTATION
    return this._http.delete(endpoint, this._httpOptions);

  }
  public put(endpoint, data) {
    // THIS METHOD TAKE A ENDPOINT AND SUBMIT A PUT VERB BASED ON HTTP PROTOCOL

    // THIS WILLRETURN A OBSERVALE OBJECT CAN BE SUBSCRIBE BY IT'S INVOKED IMPLEMENTATION
    return this._http.put(endpoint, data, this._httpOptions);
  }

  public getToken() {
    if (!localStorage.token) {
      this.setToken();
    }

    return localStorage.token;
  }
  public clearToken() {
    localStorage.removeItem('token');
    this.setToken();
  }
  public setToken() {
    this.get(`${AppSettings.SERVER_URL}token`).subscribe(
      (success) => {
        localStorage.setItem('token', success.toString());
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

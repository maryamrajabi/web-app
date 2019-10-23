import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app.setting';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _baseUrl = AppSettings.BACKEND2_SUBSCRIBE_BASE;
  constructor(private _apiService: ApiService, private _http: HttpClient) { }
  getProductList() {
    const endpoint = `${AppSettings.SERVER_API}categories/1/product-sales?page=1`;
    return this._http.get(endpoint);
  }
  /**
 * THIS METHOD GET CATEGORY LIST FROM THE SERVER
 */
}

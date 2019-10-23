import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _baseUrl = AppSettings.BACKEND2_SUBSCRIBE_BASE;

  constructor(private _apiService: ApiService, private _http: HttpClient) { }

  getFirstCategories() {
    const endpoint = `${AppSettings.BACKEND2_CHANGECATEGORY_BASE}categories`;
    return this._http.get(endpoint);
  }

  /**
  * THIS METHOD GET CATEGORY LIST FROM THE SERVER
  * */

  getCategories() {
    const endpoint = `${AppSettings.BACKEND2_CHANGECATEGORY_BASE}categories`;
    return this._http.get(endpoint);
  }

  getAttributes() {
    const endpoint = `${AppSettings.SERVER_API}categories/1/attributes`;
    return this._http.get(endpoint);
  }
  getSubCategories() {

  }
  getSubCategoryAttributes() {
    const endpoint = `${AppSettings.SERVER_API}sub-categories/1/attributes`;
    return this._http.get(endpoint);
  }
  getSubCategoryProductSales() {
    const endpoint = `${AppSettings.SERVER_API}sub-categories/1/product-sales`;
    return this._http.get(endpoint);
  }
  getProductSaleById(id) {
    const endpoint = `${AppSettings.SERVER_API}product-sales/${id}`;
    return this._http.get(endpoint);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AppSettings } from 'src/app/app.setting';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeSliderService {
  _baseUrl = AppSettings.BACKEND2_SUBSCRIBE_BASE;
  constructor(private _apiService: ApiService, private _http: HttpClient) { }
  /**
 * @Params nothing
 * @Action SEND A GET VERB TO THE SERVER FOR FETCH BANNERS
 * @QueryParams presentation
 */
  index() {
    const sliderUrl = `${this._baseUrl}sliders?presentation=all`;
    return this._http.get(sliderUrl);
  }
}

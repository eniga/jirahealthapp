import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { CATCH_ERROR_VAR } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { CountryModel } from '../models';

const countries: CountryModel[] = [];

@Injectable({
  providedIn: 'root'
})
export class CentresService {

  countries:any = [];

  constructor(private http: HttpClient) { }

  GetCountries() {
    return this.http.get<CountryModel[]>('https://restcountries.eu/rest/v2/all');
  }
}

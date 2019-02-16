import { Injectable } from '@angular/core';
import { DataService } from 'projects/generics/src/public_api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RcaChartService extends DataService {

  constructor(http:HttpClient) {
    super('http://localhost:3000/deyko/rcachart',http);
   }
}

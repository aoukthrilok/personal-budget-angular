import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  localVar = undefined;
  public dataImport():Observable<any> {
    if (this.localVar == undefined){
      this.localVar = this.http.get('http://localhost:3000/budget');
    }
    return this.localVar;
  }
}
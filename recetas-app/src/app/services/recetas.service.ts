import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meals } from '../interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private idReceta = new BehaviorSubject(0);
  currentID = this.idReceta.asObservable();

  constructor(private http: HttpClient) { }

  obtenerRecetas() {
    return this.http.get<Meals>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican`);
  }

  obtenerRecetaByID(ID){
    return this.http.get<Meals>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
  }

  changeID(ID: number) {
    this.idReceta.next(ID);
  }
}

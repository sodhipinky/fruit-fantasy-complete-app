import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  url = 'http://localhost:3000/fruits';
  constructor(private httpClient : HttpClient) { }

  getFruits() : Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(this.url);
  }

  addFruit(fruit : Fruit) : Observable<Fruit> {
    return this.httpClient.post<Fruit>(this.url, fruit);
  }

  getFruitById(id: number) : Observable<Fruit> {
    return this.httpClient.get<Fruit>(`${this.url}/${id}`)
  }

  editFruit(updatedFruit: Fruit) : Observable<Fruit> {
    return this.httpClient.put<Fruit>(`${this.url}/${updatedFruit.id}`, updatedFruit)
  }
}

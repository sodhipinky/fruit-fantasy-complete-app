import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  url = 'http://localhost:3000/fruits';
  constructor(private httpClient : HttpClient) { }
}

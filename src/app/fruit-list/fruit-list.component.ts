import { Component, Input } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent {

  @Input()
  fruitList : Fruit[] = []
}

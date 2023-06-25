import { Component, EventEmitter, Output } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent {
  fruit: Fruit = {}

  @Output()
  fruitAdded = new EventEmitter<Fruit>()
}

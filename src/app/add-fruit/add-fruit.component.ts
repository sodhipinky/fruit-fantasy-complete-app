import { Component, EventEmitter, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent {
  fruit: Fruit = {}

  @Output()
  fruitAdded = new EventEmitter<Fruit>()

  constructor(private fruitService: FruitService) { }

  addFruit() {
    this.fruitService.addFruit(this.fruit).subscribe({
      next: fruit => {
        this.fruitAdded.emit(fruit)
        this.fruit = {}
      },
      error: error => alert('Failed to add fruit due to network error!')
    })
  }
}

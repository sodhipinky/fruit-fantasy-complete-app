import { Component } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent {

  fruits: Fruit[] = []
  constructor(private fruitService : FruitService) { }

}

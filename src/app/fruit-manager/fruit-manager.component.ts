import { Component } from '@angular/core';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent {

  constructor(private fruitService : FruitService) { }

}

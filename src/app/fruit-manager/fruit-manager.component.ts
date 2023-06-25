import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit {

  fruits: Fruit[] = []
  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruitService.getFruits()
      .subscribe({
        next: (fruits) => {
          this.fruits = fruits
        },
        error: (error) => {
          alert('Network error, please try again later.')
        }
      })
  }

  onSearchTextChanged(searchText: string) {
    this.fruitService.getFruits()
      .subscribe({
        next: (fruits) => {
          if(searchText !== ''){
            this.fruits = fruits.filter(fruit => fruit?.name?.toLowerCase().includes(searchText.toLowerCase()))
          }
          else{
            this.fruits = fruits
          }
      },
        error: (error) => {
          alert('Network error, please try again later.')
        }
      })
  }

  onFruitAdded(fruit: Fruit) {
    this.fruits.push(fruit)
    this.fruitService.getFruits().subscribe((fruits) => this.fruits = fruits)
  }
}

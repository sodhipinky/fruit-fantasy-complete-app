import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {
  fruit: Fruit = {}
  editStatus: boolean = false

  constructor(
    private fruitService: FruitService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id') ?? 0
      this.fruitService.getFruitById(+id).subscribe((fruit) => {
        this.fruit = fruit
        this.editStatus = false
      })
    })
  }

  editSelectedFruit() {
    this.fruitService.editFruit(this.fruit).subscribe((fruit) => {
      this.fruit = fruit;
      this.editStatus = true;
      alert('Fruit updated successfully!')
      this.router.navigate(['/home'])
    })
  }

  deleteSelectedFruit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id') ?? 0
      this.fruitService.deleteFruit(+id).subscribe(fruit => {
        this.fruit = fruit
        alert('Fruit deleted successfully!')
        this.router.navigate(['/home'])
      })
    })
  }

  isEditComplete() {
    if(this.editStatus === false) {
      let response = confirm('The changes have not been saved. Are you sure you want to leave?')
      return response
    }
    return true
  }
}

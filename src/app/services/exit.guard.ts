import { CanDeactivateFn } from '@angular/router';
import { FruitDetailComponent } from '../fruit-detail/fruit-detail.component';

export const exitGuard: CanDeactivateFn<FruitDetailComponent> = (fruitDetailComponent, currentRoute, currentState, nextState) => {
  return fruitDetailComponent.isEditComplete();
};

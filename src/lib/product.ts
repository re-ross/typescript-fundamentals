import { Product } from './interfaces';

abstract class ProductBase implements Product {
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('not yet');
  }
}

export class FoodProduct extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

let fp = new FoodProduct(1, 'Pizza slice', 'icon.jpg');

class SportingGoodsProduct extends ProductBase {}

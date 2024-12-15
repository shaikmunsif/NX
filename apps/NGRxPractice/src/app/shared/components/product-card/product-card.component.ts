import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../types/product.type';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {

  @Input() product!:IProduct;
  @Output() handleAdd = new EventEmitter();

  ngOnInit(): void {
    console.log();
  }

  addToCart(product:IProduct){
    this.handleAdd.emit(product);
  }

}

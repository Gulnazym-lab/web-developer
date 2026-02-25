import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],  // ← ВАЖНО: импорт ProductItemComponent
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {  // ← Имя класса должно быть ProductListComponent
  @Input() products: Product[] = [];
  @Output() productDeleted = new EventEmitter<number>();

  onDeleteProduct(productId: number): void {
    if (confirm('Удалить этот товар?')) {
      this.productDeleted.emit(productId);
    }
  }
}
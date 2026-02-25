import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,  // ← ЭТО ДОЛЖНО БЫТЬ!
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<void>();
  
  Math = Math;

  likeProduct(): void {
    this.product.likes++;
  }

  shareOnWhatsApp(): void {
    const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.kaspiUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(): void {
    const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.kaspiUrl}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.kaspiUrl)}&text=${encodeURIComponent(this.product.name)}`, '_blank');
  }

  onDelete(): void {
    if (confirm('Удалить этот товар?')) {
      this.delete.emit();
    }
  }

getStars(rating: number): number[] {
  return [1, 2, 3, 4, 5];
}}
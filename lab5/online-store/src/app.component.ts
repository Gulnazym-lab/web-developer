import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedCategoryProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedCategoryProducts = this.productService.getProductsByCategory(categoryId);
  }

  onProductDeleted(productId: number): void {
    if (this.selectedCategoryId) {
      this.selectedCategoryProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }}
  getCategoryName(): string {
  const category = this.categories.find(c => c.id === this.selectedCategoryId);
  return category ? category.name : '';
}
  }
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-card',
  standalone: true,

  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

shareWhatsApp() {
  const message = encodeURIComponent(
    `Check out this product: ${this.product.link}`
  );
  window.open(`https://wa.me/?text=${message}`, '_blank');
}


shareTelegram() {
  const url = encodeURIComponent(this.product.link);
  const text = encodeURIComponent(this.product.name);
  window.open(
    `https://t.me/share/url?url=${url}&text=${text}`,
    '_blank'
  );
}

}

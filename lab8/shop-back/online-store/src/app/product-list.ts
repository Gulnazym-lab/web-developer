import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';
import { ProductCard } from '../product-card/product-card';



@Component({
  selector: 'app-product-list',
  imports: [NgFor, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
    id: 1,
    name: 'iPhone 15 Pro',
    description: 'Флагманский смартфон Apple. Отличная камера и мощный процессор.',
    price: 589990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Современный Android-смартфон. Яркий экран и быстрый интерфейс.',
    price: 499990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/?c=750000000',
  },
  {
    id: 3,
    name: 'Xiaomi 14',
    description: 'Мощный смартфон с отличным экраном и камерой. Хорошее соотношение цена/качество.',
    price: 359990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000',
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Чистый Android, отличные фото и стабильная работа. Подходит для любителей камеры.',
    price: 399990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-10-12-gb-256-gb-chernyi-145063211/?c=750000000',
  },
  {
    id: 5,
    name: 'OnePlus 12',
    description: 'Быстрый смартфон с плавным экраном и хорошей автономностью. Подходит для игр и работы.',
    price: 429990,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000',
  },

    {
    id: 6,
    name: 'Apple AirPods Pro',
    description: 'Беспроводные наушники с шумоподавлением. Комфортная посадка и хороший звук.',
    price: 129990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1518443895914-6a1c2f3e89e7?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5',
    description: 'Полноразмерные наушники с топовым шумоподавлением. Отличны для поездок и работы.',
    price: 189990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1518443895914-6a1c2f3e89e7?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
  },
  {
    id: 8,
    name: 'JBL Tune 510BT',
    description: 'Доступные беспроводные наушники. Лёгкие, удобные, хороший бас.',
    price: 19990,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
  },
  {
    id: 9,
    name: 'Samsung Galaxy Buds',
    description: 'Компактные TWS наушники. Хороший звук, удобная посадка и стабильное подключение.',
    price: 59990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1518443895914-6a1c2f3e89e7?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=750000000',
  },
  {
    id: 10,
    name: 'Anker Soundcore',
    description: 'Беспроводные наушники на каждый день. Долго держат заряд и удобно сидят в ушах.',
    price: 34990,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=60',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1200&q=60',
      'https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=1200&q=60',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-anker-soundcore-sport-x20-chernyi-128034578/?c=750000000',
  },
];



}

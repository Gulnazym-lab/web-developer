import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Фены для волос' },
    { id: 2, name: 'Утюги для волос' },
    { id: 3, name: 'Женские сумки' },
    { id: 4, name: 'Парфюмерия' }
  ];

  private products: Product[] = [
   {
  id: 1,
  name: 'Dyson Supersonic',
  description: 'Профессиональный фен с технологией быстрой сушки и защиты волос',
  price: 189990,
  rating: 4.9,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png',
  kaspiUrl: 'https://kaspi.kz/shop/p/dyson-supersonic-375463-005-1500-vt-rozovyi-100942741/',
  categoryId: 1,
  likes: 0
},
{
  id: 2,
  name: 'Rowenta Brush Activ',
  description: 'Фен-щетка для укладки с керамическим покрытием',
  price: 29990,
  rating: 4.7,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h10/84917773697054.jpg',
  kaspiUrl: 'https://kaspi.kz/shop/p/rowenta-brush-activ-cf9530f0-1000-vt-fioletovyi-100682379/',
  categoryId: 1,
  likes: 0
},
{
  id: 3,
  name: 'Philips MoistureProtect',
  description: 'Фен с технологией увлажнения и защиты от перегрева',
  price: 24990,
  rating: 4.6,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h0a/84935245512734.jpg',
  kaspiUrl: 'https://kaspi.kz/shop/p/philips-moistureprotect-bhd538-00-2200-vt-chernyi-100333553/',
  categoryId: 1,
  likes: 0
},
{
  id: 4,
  name: 'BaByliss Pro',
  description: 'Профессиональный фен для салонов красоты',
  price: 45990,
  rating: 4.8,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h27/84935245611038.jpg',
  kaspiUrl: 'https://kaspi.kz/shop/p/babyliss-pro-6610ie-2000-vt-chernyi-101075596/',
  categoryId: 1,
  likes: 0
},
{
  id: 5,
  name: 'Polaris PHS 2200K',
  description: 'Компактный дорожный фен с ионизацией',
  price: 8990,
  rating: 4.5,
  imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h6d/84935245709342.jpg',
  kaspiUrl: 'https://kaspi.kz/shop/p/polaris-phs-2200k-2200-vt-belyi-101075596/',
  categoryId: 1,
  likes: 0
},
    // Утюги для волос (categoryId: 2)
    {
      id: 6,
      name: 'Dyson Corrale',
      description: 'Беспроводной выпрямитель с гибкими пластинами',
      price: 249990,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1583256213245-7fcdbc6a3b1c?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/dyson-coralle-кованый-никель-фуксия-102152640/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Philips Kerashine',
      description: 'Выпрямитель с керамическим покрытием и ионизацией',
      price: 19990,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1617971500306-83a6f8ed7cd2?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/philips-kerashine-bhs730-03-chernyi-101268686/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'Rowenta Ultimate Experience',
      description: 'Выпрямитель с турмалиновым покрытием',
      price: 32990,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1617971500283-cb6b5e1b1b1b?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/rowenta-ultimate-experience-sf7830f0-chernyi-101268691/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'BaByliss Paris',
      description: 'Профессиональный выпрямитель с турмалином',
      price: 27990,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1617971500410-ee4c9c3b7b7b?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/babyliss-paris-2357e-rozovyi-101268687/',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'VITEK VT-2313',
      description: 'Выпрямитель с керамическим покрытием и ЖК-дисплеем',
      price: 15990,
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1617971500563-5b3b1b1b1b1b?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/vitek-vt-2313-chernyi-101268690/',
      categoryId: 2,
      likes: 0
    },

    // Женские сумки (categoryId: 3)
    {
      id: 11,
      name: 'Michael Kors Jet Set',
      description: 'Женская сумка из натуральной кожи',
      price: 89990,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/michael-kors-jet-set-30t3g0tt9b-blek-chernyi-102152640/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Furla Candy',
      description: 'Стильная сумка из матового пластика',
      price: 129990,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/furla-candy-921441-rozovyi-101268686/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Guess Gaella',
      description: 'Женская сумка с цепочкой и логотипом',
      price: 59990,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/guess-gaella-wg931655-biege-bezhevyi-102152640/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'ZARA Tote Bag',
      description: 'Объемная сумка-шопер из экокожи',
      price: 14990,
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/zara-tote-bag-chernyi-101268691/',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Marc Jacobs Snapshot',
      description: 'Маленькая сумка через плечо с двойным ремешком',
      price: 159990,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/marc-jacobs-snapshot-2m0543001-chernyi-101268687/',
      categoryId: 3,
      likes: 0
    },

    // Парфюмерия (categoryId: 4)
    {
      id: 16,
      name: 'Chanel Chance Eau Tendre',
      description: 'Женская парфюмерная вода, цветочно-фруктовый аромат',
      price: 59990,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/chanel-chance-eau-tendre-100-ml-zhenskaja-102152640/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Carolina Herrera Good Girl',
      description: 'Парфюмерная вода с ароматом жасмина и какао',
      price: 45990,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1619994403073-2d2f5f7b7b7b?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-30-ml-zhenskaja-101268686/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Dior J adore',
      description: 'Цветочный аромат с нотами иланг-иланга и жасмина',
      price: 67990,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/dior-j-adore-50-ml-zhenskaja-102152640/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'YSL Black Opium',
      description: 'Кофейно-цветочный аромат для уверенных женщин',
      price: 54990,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/ysl-black-opium-30-ml-zhenskaja-101268691/',
      categoryId: 4,
      likes: 0
    },
    {
      id: 20,
      name: 'Marc Jacobs Daisy',
      description: 'Легкий цветочный аромат с нотками клубники и фиалки',
      price: 38990,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1594035910393-e9cc48e1e3d1?w=400&h=400&fit=crop',
      kaspiUrl: 'https://kaspi.kz/shop/p/marc-jacobs-daisy-50-ml-zhenskaja-101268687/',
      categoryId: 4,
      likes: 0
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
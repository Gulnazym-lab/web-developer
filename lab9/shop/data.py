import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop.settings')
django.setup()

from api.models import Category, Product

# Создаем 4 категории
categories = [
    {'name': 'Electronics', 'description': 'Electronic devices and gadgets'},
    {'name': 'Clothing', 'description': 'Fashion and accessories'},
    {'name': 'Books', 'description': 'Books and publications'},
    {'name': 'Home & Garden', 'description': 'Home decor and garden supplies'}
]

print("Создание категорий...")
for cat_data in categories:
    cat, created = Category.objects.get_or_create(
        name=cat_data['name'],
        defaults={'description': cat_data['description']}
    )
    if created:
        print(f"✓ Создана категория: {cat.name}")
    else:
        print(f"○ Категория уже существует: {cat.name}")

# Создаем по 5 продуктов для каждой категории
products_data = {
    'Electronics': [
        {'name': 'Smartphone X', 'price': 699.99, 'stock': 50, 'description': 'Latest smartphone with advanced features'},
        {'name': 'Laptop Pro', 'price': 1299.99, 'stock': 30, 'description': 'High-performance laptop'},
        {'name': 'Wireless Earbuds', 'price': 89.99, 'stock': 100, 'description': 'Noise-cancelling earbuds'},
        {'name': 'Smart Watch', 'price': 249.99, 'stock': 75, 'description': 'Fitness tracking smartwatch'},
        {'name': 'Tablet', 'price': 399.99, 'stock': 45, 'description': 'Portable tablet for entertainment'}
    ],
    'Clothing': [
        {'name': 'Cotton T-Shirt', 'price': 19.99, 'stock': 200, 'description': '100% cotton comfortable t-shirt'},
        {'name': 'Denim Jeans', 'price': 59.99, 'stock': 150, 'description': 'Classic denim jeans'},
        {'name': 'Winter Jacket', 'price': 129.99, 'stock': 80, 'description': 'Warm winter jacket'},
        {'name': 'Running Shoes', 'price': 89.99, 'stock': 120, 'description': 'Comfortable athletic shoes'},
        {'name': 'Summer Dress', 'price': 39.99, 'stock': 100, 'description': 'Lightweight summer dress'}
    ],
    'Books': [
        {'name': 'Python Programming', 'price': 49.99, 'stock': 60, 'description': 'Learn Python from scratch'},
        {'name': 'The Great Novel', 'price': 24.99, 'stock': 90, 'description': 'Bestselling fiction book'},
        {'name': 'Cookbook', 'price': 34.99, 'stock': 70, 'description': 'Delicious recipes'},
        {'name': 'History of Art', 'price': 79.99, 'stock': 40, 'description': 'Comprehensive art history'},
        {'name': 'Business Strategy', 'price': 44.99, 'stock': 55, 'description': 'Modern business tactics'}
    ],
    'Home & Garden': [
        {'name': 'Floor Lamp', 'price': 89.99, 'stock': 65, 'description': 'Modern floor lamp'},
        {'name': 'Coffee Table', 'price': 199.99, 'stock': 35, 'description': 'Wooden coffee table'},
        {'name': 'Garden Tools Set', 'price': 49.99, 'stock': 85, 'description': 'Essential gardening tools'},
        {'name': 'Throw Pillows', 'price': 29.99, 'stock': 120, 'description': 'Decorative pillows (set of 2)'},
        {'name': 'Indoor Plant', 'price': 34.99, 'stock': 95, 'description': 'Low-maintenance houseplant'}
    ]
}

print("\nСоздание продуктов...")
for category_name, products in products_data.items():
    category = Category.objects.get(name=category_name)
    print(f"\n{category_name}:")
    for prod_data in products:
        product, created = Product.objects.get_or_create(
            name=prod_data['name'],
            category=category,
            defaults={
                'price': prod_data['price'],
                'stock': prod_data['stock'],
                'description': prod_data['description']
            }
        )
        if created:
            print(f"  ✓ Создан: {product.name} - ${product.price}")
        else:
            print(f"  ○ Уже существует: {product.name}")

print("\n" + "="*50)
print(f"ИТОГО:")
print(f"  Категорий: {Category.objects.count()}")
print(f"  Продуктов: {Product.objects.count()}")
print("="*50)
print("✅ Данные успешно добавлены!")
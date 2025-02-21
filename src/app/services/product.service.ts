import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import productsData from '../../assets/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = productsData;
  // BehaviorSubject to notify subscribers about changes in products
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  constructor() {}

  // Get all products as an observable
  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  // Add a new product
  addProduct(product: Product) {
    const newProduct = { ...product, id: this.products.length + 1 , rating: 0 };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]); // Notify subscribers
  }

  // Delete a product by ID
  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
    this.productsSubject.next([...this.products]); // Notify subscribers
  }

  // Update product details
  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.productsSubject.next([...this.products]); // Notify subscribers
    }
  }
}
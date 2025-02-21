import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { MatDialog } from '@angular/material/dialog';
import { InlineBannerComponent } from '../../../shared/components/inline-banner/inline-banner.component';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    InlineBannerComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'rating', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);
  categories: string[] = [];
  selectedCategory: string = '';
  sortBy: string = 'price'; // Default sorting by price
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sort direction
  loading: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;

  // For displaying the success/error message
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  // Fetch products from service
  loadProducts() {
    this.loading = true;
    setTimeout(() => {
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.categories = [...new Set(data.map((product) => product.category))]; // Get unique categories
          this.applyCategoryFilter(); // Ensure filter is applied after loading
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.loading = false;
        }
      });
    }, 3000);

  }

  // Filter products by category
  applyCategoryFilter() {
    this.dataSource.filter = this.selectedCategory.trim().toLowerCase();
  }

  // Custom filter predicate to filter by category
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: Product, filter: string) =>
      data.category.toLowerCase().includes(filter);
  }

  // Toggle sorting direction and update data source
  toggleSortByPrice() {
    this.sortBy = 'price'; // Sort by price
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // Toggle sort direction
    this.sortData();
  }

  toggleSortByRating() {
    this.sortBy = 'rating'; // Sort by rating
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // Toggle sort direction
    this.sortData();
  }

  // Apply sorting to the data source
  sortData() {
    const data = this.dataSource.data;
    if (this.sortBy === 'price') {
      this.dataSource.data = data.sort((a, b) =>
        this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price
      );
    } else if (this.sortBy === 'rating') {
      this.dataSource.data = data.sort((a, b) =>
        this.sortDirection === 'asc' ? a.rating - b.rating : b.rating - a.rating
      );
    }
  }

  // Add a new product
  openAddProductDialog() {
    const dialogRef = this.dialog.open(ManageProductComponent, {
      width: '600px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Simulate success
        this.message = 'Product added successfully!';
        this.messageType = 'success';
      } else {
        // Simulating error on click of cancel for now since no API is called
        this.message = 'Failed to add a product.';
        this.messageType = 'error';
      }
      this.performAction(); // Show success/error message
    });
  }

  // Edit a new product
  openEditProductDialog(product: Product) {
    const dialogRef = this.dialog.open(ManageProductComponent, {
      width: '600px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.message = 'Product updated successfully!';
        this.messageType = 'success';
      } else {
        // Simulating error on click of cancel for now since no API is called
        this.message = 'Failed to update product.';
        this.messageType = 'error';
      }
      this.performAction(); // Show success/error message
    });
  }

  // Delete product
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    // this.loadProducts(); // Refresh the table after deletion
    this.message = 'Product deleted successfully!';
    this.messageType = 'success';
    this.performAction(); // Show success message
  }

  // This method can also be triggered on other actions to show success or error
  performAction() {
    setTimeout(() => {
      this.message = ''; // Clear the message after 5 seconds
    }, 5000);
  }

}
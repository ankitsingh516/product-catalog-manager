import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-product',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.scss'
})
export class ManageProductComponent {
  productForm!: FormGroup;
  isEditMode: boolean = false;
  categories: string[] = ['Electronics', 'Clothing', 'Groceries', 'Books', 'Accessories'];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public dialogRef: MatDialogRef<ManageProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product | null
  ) {
    this.initializeProductForm();
    this.checkForEditMode();
  }

  initializeProductForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  checkForEditMode() {
    // If editing a product, populate the form with the existing product data
    if (this.data) {
      this.isEditMode = true;
      this.productForm.patchValue(this.data);
    }
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        // id: Math.floor(Math.random() * 1000),
        ...this.productForm.value,
      };
      this.productService.addProduct(newProduct);
      this.productForm.reset();
      this.dialogRef.close(newProduct);
    }
  }

  // Update product (for Edit Product)
  updateProduct() {
    if (this.productForm.valid) {
      const updatedProduct: Product = { ...this.data!, ...this.productForm.value };
      this.productService.updateProduct(updatedProduct);
      this.dialogRef.close(this.productForm.value); // Close dialog after successful update

    }
  }

  closeDialog() {
    this.dialogRef.close();  // Close the dialog without adding a product
  }

}

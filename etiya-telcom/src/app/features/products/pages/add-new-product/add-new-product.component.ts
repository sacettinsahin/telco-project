import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  addProductForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.createAddProductForm();
  }

  createAddProductForm() {
    this.addProductForm = this.formBuilder.group({
      name: [''],
      reOrderLevel: [0],
      unitsInOrder: [0],
      unitsInStock: [0],
      unitPrice: [0],
      quantityPerUnit: [0],
    });
  }

  addProduct() {
    this.productService.add(this.addProductForm.value).subscribe((response) => {
      console.log(response);
    });
  }
}

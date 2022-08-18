import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AddNewProductComponent } from './pages/add-new-product/add-new-product.component';
import { ButtonModule } from 'primeng/button';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    AddNewProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    ButtonModule,


  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }

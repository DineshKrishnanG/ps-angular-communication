import { Component, OnInit, OnDestroy } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Products';
  errorMessage: string;
  products: IProduct[];
  selectedProduct: IProduct;

  private productsSub: Subscription;
  private selProductSub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error: any) => this.errorMessage = <any>error
    );

    this.selProductSub = this.productService.selectedProductChanges$.subscribe( 
      selectedProduct => this.selectedProduct = selectedProduct 
    );
  }
  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.selProductSub.unsubscribe();
  }

  onSelected(product: IProduct): void {
    this.productService.changeSelectedProduct(product);
  }
}

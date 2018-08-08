import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'pm-product-shell-detail',
    templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    private product: IProduct | null;
    private selProductSub: Subscription;

    constructor(private productService: ProductService) { 
        
    }

    ngOnInit() {
        this.selProductSub = this.productService.selectedProductChanges$.subscribe( 
            selectedProduct => this.product = selectedProduct 
        );
    }

    ngOnDestroy(): void {
        this.selProductSub.unsubscribe();
    }
}

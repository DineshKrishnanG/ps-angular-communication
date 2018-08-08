import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Products';
    monthCount: number;
    private selProductSub: Subscription;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.selProductSub = this.productService.selectedProductChanges$.subscribe( 
            selectedProduct => {
                if(selectedProduct){
                    const start = new Date( selectedProduct.releaseDate );
                    const end = new Date();
                    this.monthCount = end.getMonth() - start.getMonth() 
                            + ( 12 * (end.getFullYear() - start.getFullYear() ) );
                } else {
                    this.monthCount = 0;
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.selProductSub.unsubscribe();
    }

}

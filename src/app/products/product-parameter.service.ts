import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ProductParameterService implements OnDestroy {
  filterBy: string;
  showImage: boolean;

  constructor() { 
    console.log('ProductParameterService created');
  }

  ngOnDestroy(): void {
    console.log('ProductParameterService is destroyed');
  }
}

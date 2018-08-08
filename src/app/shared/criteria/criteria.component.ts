import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {
  listFilter: string ;

  @ViewChild('FilterElement') filterElement: ElementRef;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['hitCount'] && !changes['hitCount'].currentValue){
      this.hitMessage = 'No Matches Found';
    }else {
      this.hitMessage = `Hits: ${this.hitCount}`;
    }
  }

  ngAfterViewInit(): void {
    if( this.filterElement.nativeElement ){
        this.filterElement.nativeElement.focus();
    } 
  }
}

import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {
  

  @ViewChild('FilterElement') filterElement: ElementRef;
  @Input() displayDetail: boolean;
  @Input() hitCount: number;
  hitMessage: string;
  @Output() valueChange: EventEmitter<string> 
                = new EventEmitter<string>();

  private _listFilter: string ;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

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

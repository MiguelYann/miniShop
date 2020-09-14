import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating: number;
    @Output() event: EventEmitter<number> = new EventEmitter<number>();
    starWidth: number;


    ngOnChanges(changes: SimpleChanges): void {
      this.starWidth = this.rating * 75/5;
    }

    send() {
      this.rating++;
      this.event.emit(this.rating);
    }
}

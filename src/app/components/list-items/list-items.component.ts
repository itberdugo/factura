import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {
  @Input() item:Item[]=[];


  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  btnRemove(id: number){
    this.removeEventEmitter.emit(id);
  }
}

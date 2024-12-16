import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  private itemId = 4;
  @Output() addEventEmitter: EventEmitter<Item> = new EventEmitter();

 item:Item = {
  id:this.itemId++,
  nameProducto:'',
  price:0,
  quantity:0
 }

 addItem(formItem:NgForm){
   this.addEventEmitter.emit(this.item);

   this.item = {
    id:this.itemId++,
    nameProducto:'',
    price:0,
    quantity:0
   }

   formItem.reset();
   formItem.resetForm();
 }
}

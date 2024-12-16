import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
@Input() name!:string;
@Input() lastName!:string;
@Input() phone!:string;
@Input() country!:string;
@Input() city!:string;
@Input() street!:string;
@Input() number!:number;
}

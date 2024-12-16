import { Component, Input } from '@angular/core';

@Component({
  selector: 'total-invoice',
  standalone: true,
  imports: [],
  templateUrl: './total-invoice.component.html',
  styleUrl: './total-invoice.component.css'
})
export class TotalInvoiceComponent {
  @Input() total!:number;
}

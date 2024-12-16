import { Component,OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { EnvoicesViewComponent } from '../envoices-view/envoices-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalInvoiceComponent } from '../total-invoice/total-invoice.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ClientViewComponent,
            CompanyViewComponent,
            EnvoicesViewComponent,
            ListItemsComponent,
            TotalInvoiceComponent,
            FormItemComponent,
            RowItemComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  printInvoice!:Invoice;
  total!:number;
  constructor(private service:InvoiceService){}

  ngOnInit():void{
    this.printInvoice = this.service.getInvoice();
    this.total = this.service.calculateTotal();
  }

  bntRemovePadre(id:number){
    // this.printInvoice.items = this.printInvoice.items.filter(item => item.id !== id);
    this.printInvoice = this.service.removeItem(id);
    this.total = this.service.calculateTotal();
  }

  addItemPadre(item:Item){
    this.printInvoice =  this.service.save(item);
    this.total = this.service.calculateTotal();
  }

}

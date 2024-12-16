import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData
  constructor() { }


  getInvoice():Invoice{
    this.calculateTotal();
    return this.invoice
  }

  removeItem(id: number):Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    return this.invoice;
  }

  save(item:Item):Invoice{
    this.invoice.items = [...this.invoice.items,item]
    return this.invoice;
  }

  calculateTotal():number{
    let total = 0;
    this.invoice.items.forEach(item =>{
        total = total + (item.quantity * item.price);
      }
    )
    return total;
  }
}

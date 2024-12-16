import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'envoices-view',
  standalone: true,
  imports: [],
  templateUrl: './envoices-view.component.html',
})
export class EnvoicesViewComponent {
  @Input() id!: number;
  @Input() name!:String;
}

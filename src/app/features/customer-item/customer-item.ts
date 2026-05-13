import { Component, input } from '@angular/core';
import { ICustomer } from '../customer/customer.interface';

@Component({
  selector: 'app-customer-item',
  imports: [],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  customer=input.required<ICustomer>()
}

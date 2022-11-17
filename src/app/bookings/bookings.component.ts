import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking: any;

  constructor() { }

  bookings = Bookings;

  ngOnInit(): void {
  }

  delete(booking: Booking): void {
    var index = Bookings.indexOf(booking);
    this.bookings.splice(index, 1)
  }
}

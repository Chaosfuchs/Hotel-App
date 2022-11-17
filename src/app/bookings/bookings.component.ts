import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  booking: any;

  constructor(private bookingService: BookingService) { }

  bookings: Booking[] = [];

  ngOnInit(): void {
    this.bookings = this.bookingService.getBookings();
  }

  delete(booking: Booking): void {

    this.bookingService.deleteBooking(booking);
  }
}

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: "Kerstin Ohlmann",
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date("2022-12-31"),
      },
      {
        id: 2,
        name: "Thorin Eichenschild",
        roomNumber: 50,
        startDate: new Date(),
        endDate: new Date("2022-12-31"),
      },
      {
        id: 3,
        name: "Sam Winchester",
        roomNumber: 12,
        startDate: new Date(),
        endDate: new Date("2022-12-31"),
      },
      {
        id: 4,
        name: "Luzifer",
        roomNumber: 66,
        startDate: new Date(),
        endDate: new Date("2022-12-31"),
      },
    ]
    return { bookings };
  }

  constructor() { }
}

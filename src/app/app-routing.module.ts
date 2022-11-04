import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path: 'bookings', component: BookingsComponent
  },
  {
    // Direkte Weiterleitung zu Bookings von der Hauptseite (Startseite)
    path: '', redirectTo: 'bookings', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [],
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  //a date should be indicated if a personal record was achieve on that date, with the specific exercise highlighted.
  //a confetti animation would be dope.
  //clicking a date should take you to the stats page for that day where you can then choose to edit it.
  //if a record has been beaten for a specific exercise, it should be updated in a mass object containing the exercises.
}

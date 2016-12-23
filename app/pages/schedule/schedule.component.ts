import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: 'pages/schedule/schedule.component.html',
  styleUrls: ['pages/schedule/schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  events = [
    {
      id: 1,
      cityid: 1,
      cityname: "Hyderabad",
      date: "27th September"
    },
    {
      id: 2,
      cityid: 2,
      cityname: "Chennai",
      date: "28th September"
    },
    {
      id: 3,
      cityid: 3,
      cityname: "Bangalore",
      date: "29th September"
    },
    {
      id: 4,
      cityid: 4,
      cityname: "Pune",
      date: "3rd October"
    },
    {
      id: 5,
      cityid: 5,
      cityname: "Kolkata",
      date: "3rd October"
    },
    {
      id: 6,
      cityid: 6,
      cityname: "Mumbai",
      date: "4th October"
    },
    {
      id: 7,
      cityid: 7,
      cityname: "Gurgaon",
      date: "5th October"
    },
    {
      id: 8,
      cityid: 8,
      cityname: "Bhubaneshwar",
      date: "5th October"
    },
    {
      id: 9,
      cityid: 9,
      cityname: "Kochi",
      date: "6th October"
    },
    {
      id: 10,
      cityid: 10,
      cityname: "Gandhinagar",
      date: "7th October"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

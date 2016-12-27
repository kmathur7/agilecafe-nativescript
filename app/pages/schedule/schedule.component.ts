import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-schedule',
  templateUrl: 'pages/schedule/schedule.component.html',
  styleUrls: ['pages/schedule/schedule.component.css'],
  providers: [ScheduleService]
})
export class ScheduleComponent implements OnInit {
  public events = [];

  constructor(private scheduleService: ScheduleService, private router: Router) {
    this.scheduleService.getSchedule().subscribe(
      (data) => {
        this.events = data;
        console.log("data " + data[0].city_name);
      },
      (err) => {
        console.log("error" + err);
      }
    );
  }

  ngOnInit() {

  }

  public onItemTap(args) {
    this.router.navigate(['/event',args.index]);
  }



} 

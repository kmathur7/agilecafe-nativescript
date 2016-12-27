import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EventService } from './event.service';
import { Event } from './event';

@Component({
  selector: 'app-home',
  templateUrl: 'pages/eventdetails/event.component.html',
  styleUrls: ['pages/eventdetails/event.component.css'],
  providers: [EventService]
})
export class EventComponent implements OnInit {

public details = {};
public event_type = [{title:"Cafe Menu"}, {title:"Light Bites"}];
public listsItems = [];
public cafe = [];
public light = [];

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService) {
      this.route.params.subscribe((params) => {
          this.eventService.getEvent(params["id"]).subscribe(
              (data) => {
                  this.details = data;
                  this.cafe = data.menu.cafe_menu;
                  this.light = data.menu.light_bites;
                  this.listsItems = this.cafe;
              },
              (err) => {
                  console.log(err);
              }
          )
      });
      }
 
  ngOnInit() {
  }
  changeData(idx){
      if(idx==0){
          this.listsItems = this.cafe;

      }
      if(idx==1){
          this.listsItems = this.light;
      }
  }

}
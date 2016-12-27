export class Event {
  city_id: number;
  city_name: string;
  event_date: string;
  event_location: string;
  event_time: string;
  menu:{
      cafe_menu: Array<Object>;
      light_bites:Array<Object>;
  };
  participant_reg_active: boolean;
  speaker_reg_active: boolean;
}
import { Component, OnInit } from '@angular/core';
import { ArgFlightsServiceService } from '../arg-flights-service.service';
import { RestService } from '../rest.service';
import { flights } from '../flights';
//table data-imports:
export interface Aircraft {
  INBOUND: string;
  AIRCRAFT: string;
  OUTBOUND: string;
  IntOrDom: string;
}
export interface Routes{
  flightNumber: string,
    originationDate: string,
    departureStation: string,
    arrivalStation: string,
    latestDepartureTime: string,
    latestArrivalTime: string,
    intOrDom: string;
}
const ELEMENT_DATA: Aircraft[] = [
  {AIRCRAFT: '0055', INBOUND: 'TUS', OUTBOUND: 'DFW', IntOrDom: 'Domestic'},
  {AIRCRAFT: '0056', INBOUND: 'DFW', OUTBOUND: 'TUS', IntOrDom: 'Domestic'},
  {AIRCRAFT: '0366', INBOUND: 'JFK', OUTBOUND: 'ORD', IntOrDom: 'Domestic'},
  {AIRCRAFT: '0367', INBOUND: 'ORD', OUTBOUND: 'JFK', IntOrDom: 'Domestic'},
  {AIRCRAFT: '0639', INBOUND: 'TUS', OUTBOUND: 'ORD', IntOrDom: 'International'},
  {AIRCRAFT: '0638', INBOUND: 'ORD', OUTBOUND: 'TUS', IntOrDom: 'International'},

];
const Flights_DATA: Routes[] = [
  {
    flightNumber: '2673',
    originationDate: '2022-03-28',
    departureStation: 'DFW',
    arrivalStation: 'PSP',
    latestDepartureTime: '2022-03-28T13:51:00',
    latestArrivalTime: '2022-03-28T17:01:00',
    intOrDom: 'D'
  },
  {
    flightNumber: "1884",
    originationDate: "2022-03-28",
    departureStation: "PSP",
    arrivalStation: "PHX",
    latestDepartureTime: "2022-03-28T20:17:00",
    latestArrivalTime: "2022-03-28T21:30:00",
    intOrDom: "D"
  },
  {
    flightNumber: "1209",
    originationDate: "2022-03-28",
    departureStation: "PHX",
    arrivalStation: "LAX",
    latestDepartureTime: "2022-03-29T01:04:00",
    latestArrivalTime: "2022-03-29T02:32:00",
    intOrDom: "D"
  },
];



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
//table:
    displayedColumnsB: string[] = ['flightNumber', 'originationDate', 'departureStation', 'arrivalStation', 'latestDepartureTime', 'latestArrivalTime', 'intOrDom'];
    displayedColumns: string[] = ['AIRCRAFT', 'INBOUND', 'OUTBOUND', 'IntOrDom'];

    dataSourceb = Flights_DATA;
    dataSource = ELEMENT_DATA;
    value = '';
  constructor(private rs : RestService) {}

columns= ["Flight Number", "origination Date", "departure Station", "arrival Station", "latest DepartureTime", "latest ArrivalTime","intOrDom"];

index=["flightNumber", "originationDate", "departureStation", "arrivalStation", "latestDepartureTime", "latestArrivalTime","intOrDom"]

flight : flights[] = [];

  ngOnInit(): void {
    this.rs.getflights().subscribe
    (
      (response) =>
      {
        this.flight = response;
      },
      (error) =>
      {
        console.log("Error Occured"+ error);
      }
    )
  }

    }

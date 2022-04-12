import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-arg-attributes',
  templateUrl: './arg-attributes.component.html',
  styleUrls: ['./arg-attributes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArgAttributesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  dataSource = data;
  columnsToDisplay = ['FlightNumber', 'DepartureTime', 'ArrivalTime', 'Stops', 'OriginationDate', 'LatestDepartureTime', 'LatestArrivalTime'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  FlightNumber: string;
  DepartureTime: string;
  ArrivalTime: number;
  Stops: string;
  OriginationDate: string;
  LatestDepartureTime: string;
  LatestArrivalTime: string;
  description: string;
}

const data: PeriodicElement[] = [
  {
    DepartureTime: '11:00 PM',
    FlightNumber: '1281',
    ArrivalTime: 1.0079,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 1281 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '5:20 PM',
    FlightNumber: '345',
    ArrivalTime: 4.0026,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 345 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '8:10 PM',
    FlightNumber: '1863',
    ArrivalTime: 6.941,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 1863 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '8:45 AM',
    FlightNumber: '1934',
    ArrivalTime: 9.0122,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 1934 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '12:00 AM',
    FlightNumber: '197',
    ArrivalTime: 10.811,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 197 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '1:15 PM',
    FlightNumber: '683',
    ArrivalTime: 12.0107,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 683 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '7:27 PM',
    FlightNumber: '7612',
    ArrivalTime: 14.0067,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 7612 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '7:27 AM',
    FlightNumber: '3561',
    ArrivalTime: 15.9994,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 3561 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '9:45 PM',
    FlightNumber: '777',
    ArrivalTime: 18.9984,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 777 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  },
  {
    DepartureTime: '10:56 PM',
    FlightNumber: '1934',
    ArrivalTime: 20.1797,
    OriginationDate: '2022-01-16',
    Stops: 'Nonstop',
    LatestDepartureTime: '2022-01-17T18:05',
    LatestArrivalTime: '2022-01-17T18:52',
    description: `Aircraft 1934 ~ Duration 2h 30m ~ Distance 802mi ~ Inflight None`,
  }];

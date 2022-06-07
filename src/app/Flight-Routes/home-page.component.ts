import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';

//import { ArgFlightsServiceService } from '../arg-flights-service.service';
//import { flights } from '../flights';
//table data-imports:
export interface Aircraft {
  INBOUND: string;
  AIRCRAFT: string;
  OUTBOUND: string;
  IntOrDom: string;
}
export interface Routes {
  flightNumber: string;
  originationDate: string;
  departureStation: string;
  arrivalStation: string;
  latestDepartureTime: string;
  latestArrivalTime: string;
  intOrDom: string;
}
const ELEMENT_DATA: Aircraft[] = [
  { AIRCRAFT: '0055', INBOUND: 'TUS', OUTBOUND: 'DFW', IntOrDom: 'Domestic' },
  { AIRCRAFT: '0056', INBOUND: 'DFW', OUTBOUND: 'TUS', IntOrDom: 'Domestic' },
  { AIRCRAFT: '0366', INBOUND: 'JFK', OUTBOUND: 'ORD', IntOrDom: 'Domestic' },
  { AIRCRAFT: '0367', INBOUND: 'ORD', OUTBOUND: 'JFK', IntOrDom: 'Domestic' },
  {
    AIRCRAFT: '0639',
    INBOUND: 'TUS',
    OUTBOUND: 'ORD',
    IntOrDom: 'International',
  },
  {
    AIRCRAFT: '0638',
    INBOUND: 'ORD',
    OUTBOUND: 'TUS',
    IntOrDom: 'International',
  },
  {
    "flightNumber": "1884",
    "originationDate": "2022-03-28",
    "departureStation": "PSP",
    "arrivalStation": "PHX",
    "latestDepartureTime": "2022-03-28T20:17:00",
    "latestArrivalTime": "2022-03-28T21:30:00",
    "intOrDom": "D"
},
{
    "flightNumber": "0820",
    "originationDate": "2022-03-28",
    "departureStation": "PHX",
    "arrivalStation": "LAX",
    "latestDepartureTime": "2022-03-29T03:25:00",
    "latestArrivalTime": "2022-03-29T06:50:00",
    "intOrDom": "D"
}
];

<<<<<<< HEAD
interface fligtListings{
      flightNumber: string,
        originationDate: string,
        departureStation: string,
        arrivalStation: string,
        latestDepartureTime: string,
        latestArrivalTime: string,
        intOrDom: string;
    }
// const alternativeRoutesGen:fligtListings[]=
// [
//   {
//       "flightNumber": "2673",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PSP",
//       "latestDepartureTime": "2022-03-28T13:51:00",
//       "latestArrivalTime": "2022-03-28T17:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1884",
//       "originationDate": "2022-03-28",
//       "departureStation": "PSP",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T20:17:00",
//       "latestArrivalTime": "2022-03-28T21:30:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   },
//   {
//     "flightNumber": "1820",
//     "originationDate": "2022-03-28",
//     "departureStation": "DFW",
//     "arrivalStation": "ONT",
//     "latestDepartureTime": "2022-03-28T13:45:00",
//     "latestArrivalTime": "2022-03-28T16:56:00",
//     "intOrDom": "D"
// },
// {
//     "flightNumber": "1792",
//     "originationDate": "2022-03-28",
//     "departureStation": "ONT",
//     "arrivalStation": "PHX",
//     "latestDepartureTime": "2022-03-28T19:14:00",
//     "latestArrivalTime": "2022-03-28T20:25:00",
//     "intOrDom": "D"
// },
// {
//     "flightNumber": "1209",
//     "originationDate": "2022-03-28",
//     "departureStation": "PHX",
//     "arrivalStation": "LAX",
//     "latestDepartureTime": "2022-03-29T01:04:00",
//     "latestArrivalTime": "2022-03-29T02:32:00",
//     "intOrDom": "D"
// }
// ],
// [
//   {
//       "flightNumber": "2673",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PSP",
//       "latestDepartureTime": "2022-03-28T13:51:00",
//       "latestArrivalTime": "2022-03-28T17:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1884",
//       "originationDate": "2022-03-28",
//       "departureStation": "PSP",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T20:17:00",
//       "latestArrivalTime": "2022-03-28T21:30:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1820",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "ONT",
//       "latestDepartureTime": "2022-03-28T13:45:00",
//       "latestArrivalTime": "2022-03-28T16:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1792",
//       "originationDate": "2022-03-28",
//       "departureStation": "ONT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:14:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1820",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "ONT",
//       "latestDepartureTime": "2022-03-28T13:45:00",
//       "latestArrivalTime": "2022-03-28T16:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1792",
//       "originationDate": "2022-03-28",
//       "departureStation": "ONT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:14:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1820",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "ONT",
//       "latestDepartureTime": "2022-03-28T13:45:00",
//       "latestArrivalTime": "2022-03-28T16:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1792",
//       "originationDate": "2022-03-28",
//       "departureStation": "ONT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:14:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2927",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T15:21:00",
//       "latestArrivalTime": "2022-03-28T17:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1990",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:47:00",
//       "latestArrivalTime": "2022-03-29T00:39:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2927",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T15:21:00",
//       "latestArrivalTime": "2022-03-28T17:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2927",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T15:21:00",
//       "latestArrivalTime": "2022-03-28T17:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2927",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T15:21:00",
//       "latestArrivalTime": "2022-03-28T17:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2926",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T17:22:00",
//       "latestArrivalTime": "2022-03-28T19:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1990",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:47:00",
//       "latestArrivalTime": "2022-03-29T00:39:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2720",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T13:31:00",
//       "latestArrivalTime": "2022-03-28T15:43:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1990",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:47:00",
//       "latestArrivalTime": "2022-03-29T00:39:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2720",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T13:31:00",
//       "latestArrivalTime": "2022-03-28T15:43:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2720",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T13:31:00",
//       "latestArrivalTime": "2022-03-28T15:43:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2720",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T13:31:00",
//       "latestArrivalTime": "2022-03-28T15:43:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1934",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:37:00",
//       "latestArrivalTime": "2022-03-28T19:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0584",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "TUS",
//       "latestDepartureTime": "2022-03-28T19:36:00",
//       "latestArrivalTime": "2022-03-28T21:59:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1990",
//       "originationDate": "2022-03-28",
//       "departureStation": "TUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:47:00",
//       "latestArrivalTime": "2022-03-29T00:39:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2845",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SLC",
//       "latestDepartureTime": "2022-03-28T16:19:00",
//       "latestArrivalTime": "2022-03-28T19:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2352",
//       "originationDate": "2022-03-28",
//       "departureStation": "SLC",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:40:00",
//       "latestArrivalTime": "2022-03-29T02:20:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2066",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SLC",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2352",
//       "originationDate": "2022-03-28",
//       "departureStation": "SLC",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:40:00",
//       "latestArrivalTime": "2022-03-29T02:20:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2065",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SLC",
//       "latestDepartureTime": "2022-03-28T18:09:00",
//       "latestArrivalTime": "2022-03-28T20:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2352",
//       "originationDate": "2022-03-28",
//       "departureStation": "SLC",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:40:00",
//       "latestArrivalTime": "2022-03-29T02:20:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2359",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T15:44:00",
//       "latestArrivalTime": "2022-03-28T18:00:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2359",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T15:44:00",
//       "latestArrivalTime": "2022-03-28T18:00:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2357",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T15:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2357",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T15:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2357",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T15:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2357",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T15:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2357",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T15:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1832",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T19:42:00",
//       "latestArrivalTime": "2022-03-28T21:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1832",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T19:42:00",
//       "latestArrivalTime": "2022-03-28T21:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1681",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T11:02:00",
//       "latestArrivalTime": "2022-03-28T13:04:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1681",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T11:02:00",
//       "latestArrivalTime": "2022-03-28T13:04:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1681",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T11:02:00",
//       "latestArrivalTime": "2022-03-28T13:04:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1681",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T11:02:00",
//       "latestArrivalTime": "2022-03-28T13:04:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1681",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T11:02:00",
//       "latestArrivalTime": "2022-03-28T13:04:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1321",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T17:44:00",
//       "latestArrivalTime": "2022-03-28T19:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1321",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T17:44:00",
//       "latestArrivalTime": "2022-03-28T19:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1244",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T14:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1244",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T14:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1244",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T14:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1332",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:08:00",
//       "latestArrivalTime": "2022-03-28T20:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1244",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T14:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1309",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:53:00",
//       "latestArrivalTime": "2022-03-29T00:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1244",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "DEN",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T14:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1164",
//       "originationDate": "2022-03-28",
//       "departureStation": "DEN",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T22:39:00",
//       "latestArrivalTime": "2022-03-29T01:10:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2759",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T13:37:00",
//       "latestArrivalTime": "2022-03-28T14:47:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2759",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T13:37:00",
//       "latestArrivalTime": "2022-03-28T14:47:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2759",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T13:37:00",
//       "latestArrivalTime": "2022-03-28T14:47:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0570",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:05:00",
//       "latestArrivalTime": "2022-03-29T01:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2616",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2616",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2616",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0570",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:05:00",
//       "latestArrivalTime": "2022-03-29T01:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2609",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T17:32:00",
//       "latestArrivalTime": "2022-03-28T18:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2609",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T17:32:00",
//       "latestArrivalTime": "2022-03-28T18:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2609",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T17:32:00",
//       "latestArrivalTime": "2022-03-28T18:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0570",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:05:00",
//       "latestArrivalTime": "2022-03-29T01:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1961",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T20:54:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0570",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:05:00",
//       "latestArrivalTime": "2022-03-29T01:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1957",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T15:33:00",
//       "latestArrivalTime": "2022-03-28T16:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1957",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T15:33:00",
//       "latestArrivalTime": "2022-03-28T16:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2695",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:41:00",
//       "latestArrivalTime": "2022-03-28T22:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1957",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAT",
//       "latestDepartureTime": "2022-03-28T15:33:00",
//       "latestArrivalTime": "2022-03-28T16:45:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0570",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAT",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:05:00",
//       "latestArrivalTime": "2022-03-29T01:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2743",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T13:50:00",
//       "latestArrivalTime": "2022-03-28T17:44:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1951",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:09:00",
//       "latestArrivalTime": "2022-03-29T00:29:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2743",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T13:50:00",
//       "latestArrivalTime": "2022-03-28T17:44:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2743",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T13:50:00",
//       "latestArrivalTime": "2022-03-28T17:44:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1955",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T15:36:00",
//       "latestArrivalTime": "2022-03-28T18:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1951",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:09:00",
//       "latestArrivalTime": "2022-03-29T00:29:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1955",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T15:36:00",
//       "latestArrivalTime": "2022-03-28T18:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1955",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T15:36:00",
//       "latestArrivalTime": "2022-03-28T18:52:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1951",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:09:00",
//       "latestArrivalTime": "2022-03-29T00:29:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1949",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:37:00",
//       "latestArrivalTime": "2022-03-28T18:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1949",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:37:00",
//       "latestArrivalTime": "2022-03-28T18:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1949",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:37:00",
//       "latestArrivalTime": "2022-03-28T18:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1947",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T12:10:00",
//       "latestArrivalTime": "2022-03-28T15:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0925",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:47:00",
//       "latestArrivalTime": "2022-03-28T21:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1939",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SAN",
//       "latestDepartureTime": "2022-03-28T17:39:00",
//       "latestArrivalTime": "2022-03-28T20:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1951",
//       "originationDate": "2022-03-28",
//       "departureStation": "SAN",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:09:00",
//       "latestArrivalTime": "2022-03-29T00:29:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:44:00",
//       "latestArrivalTime": "2022-03-28T17:59:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:44:00",
//       "latestArrivalTime": "2022-03-28T17:59:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:44:00",
//       "latestArrivalTime": "2022-03-28T17:59:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2002",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:38:00",
//       "latestArrivalTime": "2022-03-28T18:58:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2473",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T12:08:00",
//       "latestArrivalTime": "2022-03-28T15:07:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2376",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T20:02:00",
//       "latestArrivalTime": "2022-03-28T22:55:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2376",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T20:02:00",
//       "latestArrivalTime": "2022-03-28T22:55:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1996",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T21:51:00",
//       "latestArrivalTime": "2022-03-29T00:50:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1599",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T18:16:00",
//       "latestArrivalTime": "2022-03-28T21:09:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1599",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T18:16:00",
//       "latestArrivalTime": "2022-03-28T21:09:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:25:00",
//       "latestArrivalTime": "2022-03-28T20:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1550",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T13:55:00",
//       "latestArrivalTime": "2022-03-28T16:58:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1537",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T15:53:00",
//       "latestArrivalTime": "2022-03-28T19:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1537",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T15:53:00",
//       "latestArrivalTime": "2022-03-28T19:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1537",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T15:53:00",
//       "latestArrivalTime": "2022-03-28T19:01:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1380",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:22:00",
//       "latestArrivalTime": "2022-03-28T20:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-29T00:15:00",
//       "latestArrivalTime": "2022-03-29T01:34:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1380",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:22:00",
//       "latestArrivalTime": "2022-03-28T20:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2888",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:04:00",
//       "latestArrivalTime": "2022-03-28T18:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2888",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:04:00",
//       "latestArrivalTime": "2022-03-28T18:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2888",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:04:00",
//       "latestArrivalTime": "2022-03-28T18:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2094",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:32:00",
//       "latestArrivalTime": "2022-03-29T00:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2872",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T12:15:00",
//       "latestArrivalTime": "2022-03-28T15:22:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2861",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T17:55:00",
//       "latestArrivalTime": "2022-03-28T21:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2094",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:32:00",
//       "latestArrivalTime": "2022-03-29T00:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2674",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T14:35:00",
//       "latestArrivalTime": "2022-03-28T17:54:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2094",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:32:00",
//       "latestArrivalTime": "2022-03-29T00:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2114",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T16:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2094",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:32:00",
//       "latestArrivalTime": "2022-03-29T00:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2114",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T16:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2114",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T16:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2114",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T13:38:00",
//       "latestArrivalTime": "2022-03-28T16:46:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0533",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T18:27:00",
//       "latestArrivalTime": "2022-03-28T19:48:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2017",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "SNA",
//       "latestDepartureTime": "2022-03-28T15:37:00",
//       "latestArrivalTime": "2022-03-28T19:08:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2094",
//       "originationDate": "2022-03-28",
//       "departureStation": "SNA",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:32:00",
//       "latestArrivalTime": "2022-03-29T00:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2249",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:10:00",
//       "latestArrivalTime": "2022-03-28T18:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T21:31:00",
//       "latestArrivalTime": "2022-03-28T22:40:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2249",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:10:00",
//       "latestArrivalTime": "2022-03-28T18:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2249",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:10:00",
//       "latestArrivalTime": "2022-03-28T18:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2249",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:10:00",
//       "latestArrivalTime": "2022-03-28T18:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2249",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T16:10:00",
//       "latestArrivalTime": "2022-03-28T18:56:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1885",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T22:31:00",
//       "latestArrivalTime": "2022-03-29T01:12:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1155",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T20:21:00",
//       "latestArrivalTime": "2022-03-28T22:55:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1155",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T20:21:00",
//       "latestArrivalTime": "2022-03-28T22:55:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1155",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T20:21:00",
//       "latestArrivalTime": "2022-03-28T22:55:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0698",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:47:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T21:31:00",
//       "latestArrivalTime": "2022-03-28T22:40:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0698",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:47:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0698",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:47:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0698",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:47:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0698",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T17:47:00",
//       "latestArrivalTime": "2022-03-28T20:25:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:24:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:24:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T21:31:00",
//       "latestArrivalTime": "2022-03-28T22:40:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0520",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T13:36:00",
//       "latestArrivalTime": "2022-03-28T16:21:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:24:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2109",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T17:24:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T14:44:00",
//       "latestArrivalTime": "2022-03-28T15:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2388",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:49:00",
//       "latestArrivalTime": "2022-03-28T22:08:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T14:44:00",
//       "latestArrivalTime": "2022-03-28T15:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2002",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:38:00",
//       "latestArrivalTime": "2022-03-28T18:58:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1611",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T14:44:00",
//       "latestArrivalTime": "2022-03-28T15:53:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1541",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T21:31:00",
//       "latestArrivalTime": "2022-03-28T22:40:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "2580",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T14:46:00",
//       "latestArrivalTime": "2022-03-28T16:05:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1887",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:01:00",
//       "latestArrivalTime": "2022-03-28T18:30:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0899",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:42:00",
//       "latestArrivalTime": "2022-03-28T23:09:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0474",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T11:00:00",
//       "latestArrivalTime": "2022-03-28T13:35:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0415",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:00:00",
//       "latestArrivalTime": "2022-03-28T21:38:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0425",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:15:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0415",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:00:00",
//       "latestArrivalTime": "2022-03-28T21:38:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0415",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:00:00",
//       "latestArrivalTime": "2022-03-28T21:38:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0339",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:53:00",
//       "latestArrivalTime": "2022-03-29T02:31:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9816",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-29T00:06:00",
//       "latestArrivalTime": "2022-03-29T01:06:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9703",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T21:00:00",
//       "latestArrivalTime": "2022-03-28T22:30:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9703",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T21:00:00",
//       "latestArrivalTime": "2022-03-28T22:30:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9702",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:58:00",
//       "latestArrivalTime": "2022-03-28T22:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9702",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:58:00",
//       "latestArrivalTime": "2022-03-28T22:28:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9701",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:35:00",
//       "latestArrivalTime": "2022-03-28T22:05:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "9701",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:35:00",
//       "latestArrivalTime": "2022-03-28T22:05:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2842",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T22:41:00",
//       "latestArrivalTime": "2022-03-28T23:41:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2199",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T23:30:00",
//       "latestArrivalTime": "2022-03-29T00:31:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2198",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T17:30:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2198",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T17:30:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2198",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T17:30:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2198",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T17:30:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2198",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T17:30:00",
//       "latestArrivalTime": "2022-03-28T18:33:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0539",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:19:00",
//       "latestArrivalTime": "2022-03-28T23:44:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1592",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T19:02:00",
//       "latestArrivalTime": "2022-03-28T22:02:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1459",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:46:00",
//       "latestArrivalTime": "2022-03-28T21:11:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1176",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T12:05:00",
//       "latestArrivalTime": "2022-03-28T13:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0539",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:19:00",
//       "latestArrivalTime": "2022-03-28T23:44:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1064",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:23:00",
//       "latestArrivalTime": "2022-03-28T21:27:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1064",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T20:23:00",
//       "latestArrivalTime": "2022-03-28T21:27:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1060",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T21:44:00",
//       "latestArrivalTime": "2022-03-28T22:47:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1060",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T21:44:00",
//       "latestArrivalTime": "2022-03-28T22:47:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1592",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T19:02:00",
//       "latestArrivalTime": "2022-03-28T22:02:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1459",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:46:00",
//       "latestArrivalTime": "2022-03-28T21:11:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1059",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T14:00:00",
//       "latestArrivalTime": "2022-03-28T15:10:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0539",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:19:00",
//       "latestArrivalTime": "2022-03-28T23:44:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1592",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAS",
//       "latestDepartureTime": "2022-03-28T19:02:00",
//       "latestArrivalTime": "2022-03-28T22:02:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0739",
//       "originationDate": "2022-03-28",
//       "departureStation": "LAS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:40:00",
//       "latestArrivalTime": "2022-03-29T04:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1760",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T23:41:00",
//       "latestArrivalTime": "2022-03-29T02:13:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "1209",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T01:04:00",
//       "latestArrivalTime": "2022-03-29T02:32:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1083",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "PHX",
//       "latestDepartureTime": "2022-03-28T19:44:00",
//       "latestArrivalTime": "2022-03-28T22:18:00",
//       "intOrDom": "D"
//   },
//   {
//       "flightNumber": "0820",
//       "originationDate": "2022-03-28",
//       "departureStation": "PHX",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T03:25:00",
//       "latestArrivalTime": "2022-03-29T06:50:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1713",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:19:00",
//       "latestArrivalTime": "2022-03-29T05:46:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "1459",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T17:46:00",
//       "latestArrivalTime": "2022-03-28T21:11:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0111",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "AUS",
//       "latestDepartureTime": "2022-03-28T13:00:00",
//       "latestArrivalTime": "2022-03-28T15:00:00",
//       "intOrDom": "T"
//   },
//   {
//       "flightNumber": "0539",
//       "originationDate": "2022-03-28",
//       "departureStation": "AUS",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:19:00",
//       "latestArrivalTime": "2022-03-28T23:44:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2886",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T18:19:00",
//       "latestArrivalTime": "2022-03-28T21:40:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2853",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T12:00:00",
//       "latestArrivalTime": "2022-03-28T15:06:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2697",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T00:34:00",
//       "latestArrivalTime": "2022-03-29T03:58:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2543",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T16:49:00",
//       "latestArrivalTime": "2022-03-28T20:11:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2459",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T19:35:00",
//       "latestArrivalTime": "2022-03-28T22:58:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2437",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T21:37:00",
//       "latestArrivalTime": "2022-03-29T01:00:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "2424",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T13:39:00",
//       "latestArrivalTime": "2022-03-28T16:44:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1653",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T23:40:00",
//       "latestArrivalTime": "2022-03-29T03:03:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "1247",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-29T02:23:00",
//       "latestArrivalTime": "2022-03-29T05:45:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0788",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T20:31:00",
//       "latestArrivalTime": "2022-03-28T23:53:00",
//       "intOrDom": "D"
//   }
// ],
// [
//   {
//       "flightNumber": "0448",
//       "originationDate": "2022-03-28",
//       "departureStation": "DFW",
//       "arrivalStation": "LAX",
//       "latestDepartureTime": "2022-03-28T16:45:00",
//       "latestArrivalTime": "2022-03-28T20:24:00",
//       "intOrDom": "D"
//   }
// ]

=======
>>>>>>> testmaster
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
<<<<<<< HEAD
  headers =["flightNumber", "originationDate", "departureStation", "arrivalStation", "latestDepartureTime", "latestArrivalTime","intOrDom"]

  rows = [
    {
      "flightNumber": "0739",
      "originationDate": "2022-03-28",
      "departureStation": "LAS",
      "arrivalStation": "LAX",
      "latestDepartureTime": "2022-03-29T02:40:00",
      "latestArrivalTime": "2022-03-29T04:00:00",
      "intOrDom": "D"
  },
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
    {
      "flightNumber": "1884",
      "originationDate": "2022-03-28",
      "departureStation": "PSP",
      "arrivalStation": "PHX",
      "latestDepartureTime": "2022-03-28T20:17:00",
      "latestArrivalTime": "2022-03-28T21:30:00",
      "intOrDom": "D"
  },
  {
      "flightNumber": "0820",
      "originationDate": "2022-03-28",
      "departureStation": "PHX",
      "arrivalStation": "LAX",
      "latestDepartureTime": "2022-03-29T03:25:00",
      "latestArrivalTime": "2022-03-29T06:50:00",
      "intOrDom": "D"
  }
  ];

rows2 = [
  {
    "flightNumber": "0111",
    "originationDate": "2022-03-28",
    "departureStation": "DFW",
    "arrivalStation": "AUS",
    "latestDepartureTime": "2022-03-28T13:00:00",
    "latestArrivalTime": "2022-03-28T15:00:00",
    "intOrDom": "T"
},
{
    "flightNumber": "1713",
    "originationDate": "2022-03-28",
    "departureStation": "AUS",
    "arrivalStation": "LAX",
    "latestDepartureTime": "2022-03-29T02:19:00",
    "latestArrivalTime": "2022-03-29T05:46:00",
    "intOrDom": "D"
},
{
  "flightNumber": "0111",
  "originationDate": "2022-03-28",
  "departureStation": "DFW",
  "arrivalStation": "AUS",
  "latestDepartureTime": "2022-03-28T13:00:00",
  "latestArrivalTime": "2022-03-28T15:00:00",
  "intOrDom": "T"
},
{
  "flightNumber": "1459",
  "originationDate": "2022-03-28",
  "departureStation": "AUS",
  "arrivalStation": "LAX",
  "latestDepartureTime": "2022-03-28T17:46:00",
  "latestArrivalTime": "2022-03-28T21:11:00",
  "intOrDom": "D"
},
{
  "flightNumber": "0111",
  "originationDate": "2022-03-28",
  "departureStation": "DFW",
  "arrivalStation": "AUS",
  "latestDepartureTime": "2022-03-28T13:00:00",
  "latestArrivalTime": "2022-03-28T15:00:00",
  "intOrDom": "T"
},
{
  "flightNumber": "0539",
  "originationDate": "2022-03-28",
  "departureStation": "AUS",
  "arrivalStation": "LAX",
  "latestDepartureTime": "2022-03-28T20:19:00",
  "latestArrivalTime": "2022-03-28T23:44:00",
  "intOrDom": "D"
}
]

rows3 = [
  {
    "flightNumber": "1155",
    "originationDate": "2022-03-28",
    "departureStation": "DFW",
    "arrivalStation": "PHX",
    "latestDepartureTime": "2022-03-28T20:21:00",
    "latestArrivalTime": "2022-03-28T22:55:00",
    "intOrDom": "D"
},
{
    "flightNumber": "0820",
    "originationDate": "2022-03-28",
    "departureStation": "PHX",
    "arrivalStation": "LAX",
    "latestDepartureTime": "2022-03-29T03:25:00",
    "latestArrivalTime": "2022-03-29T06:50:00",
    "intOrDom": "D"
},

{
  "flightNumber": "2249",
  "originationDate": "2022-03-28",
  "departureStation": "DFW",
  "arrivalStation": "PHX",
  "latestDepartureTime": "2022-03-28T16:10:00",
  "latestArrivalTime": "2022-03-28T18:56:00",
  "intOrDom": "D"
},
{
  "flightNumber": "1209",
  "originationDate": "2022-03-28",
  "departureStation": "PHX",
  "arrivalStation": "LAX",
  "latestDepartureTime": "2022-03-29T01:04:00",
  "latestArrivalTime": "2022-03-29T02:32:00",
  "intOrDom": "D"
},
{
  "flightNumber": "2114",
  "originationDate": "2022-03-28",
  "departureStation": "DFW",
  "arrivalStation": "SNA",
  "latestDepartureTime": "2022-03-28T13:38:00",
  "latestArrivalTime": "2022-03-28T16:46:00",
  "intOrDom": "D"
},
{
  "flightNumber": "2094",
  "originationDate": "2022-03-28",
  "departureStation": "SNA",
  "arrivalStation": "PHX",
  "latestDepartureTime": "2022-03-28T23:32:00",
  "latestArrivalTime": "2022-03-29T00:53:00",
  "intOrDom": "D"
},
{
  "flightNumber": "0820",
  "originationDate": "2022-03-28",
  "departureStation": "PHX",
  "arrivalStation": "LAX",
  "latestDepartureTime": "2022-03-29T03:25:00",
  "latestArrivalTime": "2022-03-29T06:50:00",
  "intOrDom": "D"
}
]

//table:
 //   displayedColumnsB: string[] = ['flightNumber', 'originationDate', 'departureStation', 'arrivalStation', 'latestDepartureTime', 'latestArrivalTime', 'intOrDom'];
   // displayedColumns: string[] = ['AIRCRAFT', 'INBOUND', 'OUTBOUND', 'IntOrDom'];

//    dataSourceb = Flights_DATA;
 //   value = '';

//    alternativeRoutes: any;//for getter


  constructor(private rs : RestService, private http : HttpClient) {}

// columns= ["Flight Number", "origination Date", "departure Station", "arrival Station", "latest DepartureTime", "latest ArrivalTime","intOrDom"];

// index=["flightNumber", "originationDate", "departureStation", "arrivalStation", "latestDepartureTime", "latestArrivalTime","intOrDom"]

// flight : flights[] = [];

  ngOnInit(): void {
    // this.getAlterntiveRoute();

    // this.rs.getflights().subscribe
    // (
    //   (response) =>
    //   {
    //     this.flight = response;
    //   },
    //   (error) =>
    //   {
    //     console.log("Error Occured"+ error);
    //   }
    // )
  }
//json getter:
// getAlterntiveRoute(){
//   this.http.get('http://localhost:4200/assets/jsondata/alternative-route.json')
//   .subscribe((routes) => {
//     this.alternativeRoutes = routes;
//     console.log(this.alternativeRoutes);
//   });
//   }
=======
  Flights_DATA = [
    [
      {
        flightNumber: '2673',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PSP',
        latestDepartureTime: '2022-03-28T13:51:00',
        latestArrivalTime: '2022-03-28T17:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1884',
        originationDate: '2022-03-28',
        departureStation: 'PSP',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T20:17:00',
        latestArrivalTime: '2022-03-28T21:30:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2673',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PSP',
        latestDepartureTime: '2022-03-28T13:51:00',
        latestArrivalTime: '2022-03-28T17:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1884',
        originationDate: '2022-03-28',
        departureStation: 'PSP',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T20:17:00',
        latestArrivalTime: '2022-03-28T21:30:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1820',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'ONT',
        latestDepartureTime: '2022-03-28T13:45:00',
        latestArrivalTime: '2022-03-28T16:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1792',
        originationDate: '2022-03-28',
        departureStation: 'ONT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:14:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1820',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'ONT',
        latestDepartureTime: '2022-03-28T13:45:00',
        latestArrivalTime: '2022-03-28T16:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1792',
        originationDate: '2022-03-28',
        departureStation: 'ONT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:14:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1820',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'ONT',
        latestDepartureTime: '2022-03-28T13:45:00',
        latestArrivalTime: '2022-03-28T16:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1792',
        originationDate: '2022-03-28',
        departureStation: 'ONT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:14:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2927',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T15:21:00',
        latestArrivalTime: '2022-03-28T17:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1990',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:47:00',
        latestArrivalTime: '2022-03-29T00:39:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2927',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T15:21:00',
        latestArrivalTime: '2022-03-28T17:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2927',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T15:21:00',
        latestArrivalTime: '2022-03-28T17:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2927',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T15:21:00',
        latestArrivalTime: '2022-03-28T17:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2926',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T17:22:00',
        latestArrivalTime: '2022-03-28T19:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1990',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:47:00',
        latestArrivalTime: '2022-03-29T00:39:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2720',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T13:31:00',
        latestArrivalTime: '2022-03-28T15:43:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1990',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:47:00',
        latestArrivalTime: '2022-03-29T00:39:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2720',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T13:31:00',
        latestArrivalTime: '2022-03-28T15:43:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2720',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T13:31:00',
        latestArrivalTime: '2022-03-28T15:43:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2720',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T13:31:00',
        latestArrivalTime: '2022-03-28T15:43:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1934',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:37:00',
        latestArrivalTime: '2022-03-28T19:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0584',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'TUS',
        latestDepartureTime: '2022-03-28T19:36:00',
        latestArrivalTime: '2022-03-28T21:59:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1990',
        originationDate: '2022-03-28',
        departureStation: 'TUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:47:00',
        latestArrivalTime: '2022-03-29T00:39:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2845',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SLC',
        latestDepartureTime: '2022-03-28T16:19:00',
        latestArrivalTime: '2022-03-28T19:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2352',
        originationDate: '2022-03-28',
        departureStation: 'SLC',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:40:00',
        latestArrivalTime: '2022-03-29T02:20:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2066',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SLC',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2352',
        originationDate: '2022-03-28',
        departureStation: 'SLC',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:40:00',
        latestArrivalTime: '2022-03-29T02:20:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2065',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SLC',
        latestDepartureTime: '2022-03-28T18:09:00',
        latestArrivalTime: '2022-03-28T20:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2352',
        originationDate: '2022-03-28',
        departureStation: 'SLC',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:40:00',
        latestArrivalTime: '2022-03-29T02:20:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2359',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T15:44:00',
        latestArrivalTime: '2022-03-28T18:00:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2359',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T15:44:00',
        latestArrivalTime: '2022-03-28T18:00:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2357',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T15:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2357',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T15:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2357',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T15:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2357',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T15:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2357',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T15:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1832',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T19:42:00',
        latestArrivalTime: '2022-03-28T21:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1832',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T19:42:00',
        latestArrivalTime: '2022-03-28T21:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1681',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T11:02:00',
        latestArrivalTime: '2022-03-28T13:04:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1681',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T11:02:00',
        latestArrivalTime: '2022-03-28T13:04:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1681',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T11:02:00',
        latestArrivalTime: '2022-03-28T13:04:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1681',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T11:02:00',
        latestArrivalTime: '2022-03-28T13:04:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1681',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T11:02:00',
        latestArrivalTime: '2022-03-28T13:04:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1321',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T17:44:00',
        latestArrivalTime: '2022-03-28T19:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1321',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T17:44:00',
        latestArrivalTime: '2022-03-28T19:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1244',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T14:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1244',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T14:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1244',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T14:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1332',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:08:00',
        latestArrivalTime: '2022-03-28T20:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1244',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T14:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1309',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:53:00',
        latestArrivalTime: '2022-03-29T00:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1244',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'DEN',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T14:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1164',
        originationDate: '2022-03-28',
        departureStation: 'DEN',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T22:39:00',
        latestArrivalTime: '2022-03-29T01:10:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2759',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T13:37:00',
        latestArrivalTime: '2022-03-28T14:47:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2759',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T13:37:00',
        latestArrivalTime: '2022-03-28T14:47:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2759',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T13:37:00',
        latestArrivalTime: '2022-03-28T14:47:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0570',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:05:00',
        latestArrivalTime: '2022-03-29T01:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2616',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2616',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2616',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0570',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:05:00',
        latestArrivalTime: '2022-03-29T01:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2609',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T17:32:00',
        latestArrivalTime: '2022-03-28T18:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2609',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T17:32:00',
        latestArrivalTime: '2022-03-28T18:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2609',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T17:32:00',
        latestArrivalTime: '2022-03-28T18:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0570',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:05:00',
        latestArrivalTime: '2022-03-29T01:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1961',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T20:54:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0570',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:05:00',
        latestArrivalTime: '2022-03-29T01:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1957',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T15:33:00',
        latestArrivalTime: '2022-03-28T16:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1957',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T15:33:00',
        latestArrivalTime: '2022-03-28T16:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2695',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:41:00',
        latestArrivalTime: '2022-03-28T22:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1957',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAT',
        latestDepartureTime: '2022-03-28T15:33:00',
        latestArrivalTime: '2022-03-28T16:45:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0570',
        originationDate: '2022-03-28',
        departureStation: 'SAT',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:05:00',
        latestArrivalTime: '2022-03-29T01:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2743',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T13:50:00',
        latestArrivalTime: '2022-03-28T17:44:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1951',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:09:00',
        latestArrivalTime: '2022-03-29T00:29:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2743',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T13:50:00',
        latestArrivalTime: '2022-03-28T17:44:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2743',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T13:50:00',
        latestArrivalTime: '2022-03-28T17:44:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1955',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T15:36:00',
        latestArrivalTime: '2022-03-28T18:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1951',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:09:00',
        latestArrivalTime: '2022-03-29T00:29:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1955',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T15:36:00',
        latestArrivalTime: '2022-03-28T18:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1955',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T15:36:00',
        latestArrivalTime: '2022-03-28T18:52:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1951',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:09:00',
        latestArrivalTime: '2022-03-29T00:29:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1949',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:37:00',
        latestArrivalTime: '2022-03-28T18:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1949',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:37:00',
        latestArrivalTime: '2022-03-28T18:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1949',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:37:00',
        latestArrivalTime: '2022-03-28T18:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1947',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T12:10:00',
        latestArrivalTime: '2022-03-28T15:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0925',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:47:00',
        latestArrivalTime: '2022-03-28T21:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1939',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SAN',
        latestDepartureTime: '2022-03-28T17:39:00',
        latestArrivalTime: '2022-03-28T20:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1951',
        originationDate: '2022-03-28',
        departureStation: 'SAN',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:09:00',
        latestArrivalTime: '2022-03-29T00:29:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:44:00',
        latestArrivalTime: '2022-03-28T17:59:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:44:00',
        latestArrivalTime: '2022-03-28T17:59:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:44:00',
        latestArrivalTime: '2022-03-28T17:59:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2002',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:38:00',
        latestArrivalTime: '2022-03-28T18:58:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2473',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T12:08:00',
        latestArrivalTime: '2022-03-28T15:07:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2376',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T20:02:00',
        latestArrivalTime: '2022-03-28T22:55:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2376',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T20:02:00',
        latestArrivalTime: '2022-03-28T22:55:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1996',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T21:51:00',
        latestArrivalTime: '2022-03-29T00:50:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1599',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T18:16:00',
        latestArrivalTime: '2022-03-28T21:09:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1599',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T18:16:00',
        latestArrivalTime: '2022-03-28T21:09:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:25:00',
        latestArrivalTime: '2022-03-28T20:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1550',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T13:55:00',
        latestArrivalTime: '2022-03-28T16:58:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1537',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T15:53:00',
        latestArrivalTime: '2022-03-28T19:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1537',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T15:53:00',
        latestArrivalTime: '2022-03-28T19:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1537',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T15:53:00',
        latestArrivalTime: '2022-03-28T19:01:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1380',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:22:00',
        latestArrivalTime: '2022-03-28T20:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-29T00:15:00',
        latestArrivalTime: '2022-03-29T01:34:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1380',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:22:00',
        latestArrivalTime: '2022-03-28T20:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2888',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:04:00',
        latestArrivalTime: '2022-03-28T18:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2888',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:04:00',
        latestArrivalTime: '2022-03-28T18:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2888',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:04:00',
        latestArrivalTime: '2022-03-28T18:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2094',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:32:00',
        latestArrivalTime: '2022-03-29T00:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2872',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T12:15:00',
        latestArrivalTime: '2022-03-28T15:22:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2861',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T17:55:00',
        latestArrivalTime: '2022-03-28T21:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2094',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:32:00',
        latestArrivalTime: '2022-03-29T00:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2674',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T14:35:00',
        latestArrivalTime: '2022-03-28T17:54:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2094',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:32:00',
        latestArrivalTime: '2022-03-29T00:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2114',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T16:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2094',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:32:00',
        latestArrivalTime: '2022-03-29T00:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2114',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T16:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2114',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T16:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2114',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T13:38:00',
        latestArrivalTime: '2022-03-28T16:46:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0533',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T18:27:00',
        latestArrivalTime: '2022-03-28T19:48:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2017',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'SNA',
        latestDepartureTime: '2022-03-28T15:37:00',
        latestArrivalTime: '2022-03-28T19:08:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2094',
        originationDate: '2022-03-28',
        departureStation: 'SNA',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:32:00',
        latestArrivalTime: '2022-03-29T00:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2249',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:10:00',
        latestArrivalTime: '2022-03-28T18:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T21:31:00',
        latestArrivalTime: '2022-03-28T22:40:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2249',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:10:00',
        latestArrivalTime: '2022-03-28T18:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2249',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:10:00',
        latestArrivalTime: '2022-03-28T18:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2249',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:10:00',
        latestArrivalTime: '2022-03-28T18:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2249',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T16:10:00',
        latestArrivalTime: '2022-03-28T18:56:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1885',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T22:31:00',
        latestArrivalTime: '2022-03-29T01:12:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1155',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T20:21:00',
        latestArrivalTime: '2022-03-28T22:55:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1155',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T20:21:00',
        latestArrivalTime: '2022-03-28T22:55:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1155',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T20:21:00',
        latestArrivalTime: '2022-03-28T22:55:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0698',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:47:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T21:31:00',
        latestArrivalTime: '2022-03-28T22:40:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0698',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:47:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0698',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:47:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0698',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:47:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0698',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T17:47:00',
        latestArrivalTime: '2022-03-28T20:25:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:24:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:24:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T21:31:00',
        latestArrivalTime: '2022-03-28T22:40:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0520',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T13:36:00',
        latestArrivalTime: '2022-03-28T16:21:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:24:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2109',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T17:24:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T14:44:00',
        latestArrivalTime: '2022-03-28T15:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2388',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:49:00',
        latestArrivalTime: '2022-03-28T22:08:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T14:44:00',
        latestArrivalTime: '2022-03-28T15:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2002',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:38:00',
        latestArrivalTime: '2022-03-28T18:58:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1611',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T14:44:00',
        latestArrivalTime: '2022-03-28T15:53:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1541',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T21:31:00',
        latestArrivalTime: '2022-03-28T22:40:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '2580',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T14:46:00',
        latestArrivalTime: '2022-03-28T16:05:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1887',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:01:00',
        latestArrivalTime: '2022-03-28T18:30:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0899',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:42:00',
        latestArrivalTime: '2022-03-28T23:09:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0474',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T11:00:00',
        latestArrivalTime: '2022-03-28T13:35:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0415',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:00:00',
        latestArrivalTime: '2022-03-28T21:38:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0425',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:15:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0415',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:00:00',
        latestArrivalTime: '2022-03-28T21:38:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0415',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:00:00',
        latestArrivalTime: '2022-03-28T21:38:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0339',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:53:00',
        latestArrivalTime: '2022-03-29T02:31:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9816',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-29T00:06:00',
        latestArrivalTime: '2022-03-29T01:06:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9703',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T21:00:00',
        latestArrivalTime: '2022-03-28T22:30:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9703',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T21:00:00',
        latestArrivalTime: '2022-03-28T22:30:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9702',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:58:00',
        latestArrivalTime: '2022-03-28T22:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9702',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:58:00',
        latestArrivalTime: '2022-03-28T22:28:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9701',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:35:00',
        latestArrivalTime: '2022-03-28T22:05:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '9701',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:35:00',
        latestArrivalTime: '2022-03-28T22:05:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2842',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T22:41:00',
        latestArrivalTime: '2022-03-28T23:41:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2199',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T23:30:00',
        latestArrivalTime: '2022-03-29T00:31:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2198',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T17:30:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2198',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T17:30:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2198',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T17:30:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2198',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T17:30:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2198',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T17:30:00',
        latestArrivalTime: '2022-03-28T18:33:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0539',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:19:00',
        latestArrivalTime: '2022-03-28T23:44:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1592',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T19:02:00',
        latestArrivalTime: '2022-03-28T22:02:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1459',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:46:00',
        latestArrivalTime: '2022-03-28T21:11:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1176',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T12:05:00',
        latestArrivalTime: '2022-03-28T13:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0539',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:19:00',
        latestArrivalTime: '2022-03-28T23:44:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1064',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:23:00',
        latestArrivalTime: '2022-03-28T21:27:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1064',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T20:23:00',
        latestArrivalTime: '2022-03-28T21:27:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1060',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T21:44:00',
        latestArrivalTime: '2022-03-28T22:47:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1060',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T21:44:00',
        latestArrivalTime: '2022-03-28T22:47:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1592',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T19:02:00',
        latestArrivalTime: '2022-03-28T22:02:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1459',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:46:00',
        latestArrivalTime: '2022-03-28T21:11:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1059',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T14:00:00',
        latestArrivalTime: '2022-03-28T15:10:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0539',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:19:00',
        latestArrivalTime: '2022-03-28T23:44:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1592',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAS',
        latestDepartureTime: '2022-03-28T19:02:00',
        latestArrivalTime: '2022-03-28T22:02:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0739',
        originationDate: '2022-03-28',
        departureStation: 'LAS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:40:00',
        latestArrivalTime: '2022-03-29T04:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1760',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T23:41:00',
        latestArrivalTime: '2022-03-29T02:13:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '1209',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T01:04:00',
        latestArrivalTime: '2022-03-29T02:32:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1083',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'PHX',
        latestDepartureTime: '2022-03-28T19:44:00',
        latestArrivalTime: '2022-03-28T22:18:00',
        intOrDom: 'D',
      },
      {
        flightNumber: '0820',
        originationDate: '2022-03-28',
        departureStation: 'PHX',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T03:25:00',
        latestArrivalTime: '2022-03-29T06:50:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1713',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:19:00',
        latestArrivalTime: '2022-03-29T05:46:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '1459',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T17:46:00',
        latestArrivalTime: '2022-03-28T21:11:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0111',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'AUS',
        latestDepartureTime: '2022-03-28T13:00:00',
        latestArrivalTime: '2022-03-28T15:00:00',
        intOrDom: 'T',
      },
      {
        flightNumber: '0539',
        originationDate: '2022-03-28',
        departureStation: 'AUS',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:19:00',
        latestArrivalTime: '2022-03-28T23:44:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2886',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T18:19:00',
        latestArrivalTime: '2022-03-28T21:40:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2853',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T12:00:00',
        latestArrivalTime: '2022-03-28T15:06:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2697',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T00:34:00',
        latestArrivalTime: '2022-03-29T03:58:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2543',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T16:49:00',
        latestArrivalTime: '2022-03-28T20:11:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2459',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T19:35:00',
        latestArrivalTime: '2022-03-28T22:58:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2437',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T21:37:00',
        latestArrivalTime: '2022-03-29T01:00:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '2424',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T13:39:00',
        latestArrivalTime: '2022-03-28T16:44:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1653',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T23:40:00',
        latestArrivalTime: '2022-03-29T03:03:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '1247',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-29T02:23:00',
        latestArrivalTime: '2022-03-29T05:45:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0788',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T20:31:00',
        latestArrivalTime: '2022-03-28T23:53:00',
        intOrDom: 'D',
      },
    ],
    [
      {
        flightNumber: '0448',
        originationDate: '2022-03-28',
        departureStation: 'DFW',
        arrivalStation: 'LAX',
        latestDepartureTime: '2022-03-28T16:45:00',
        latestArrivalTime: '2022-03-28T20:24:00',
        intOrDom: 'D',
      },
    ],
  ];

  //table:
  displayedColumnsB: string[] = [
    'flightNumber',
    'originationDate',
    'departureStation',
    'arrivalStation',
    'latestDepartureTime',
    'latestArrivalTime',
    'intOrDom',
  ];
  displayedColumns: string[] = ['AIRCRAFT', 'INBOUND', 'OUTBOUND', 'IntOrDom'];

  // dataSourceb = Flights_DATA;
  dataSource = ELEMENT_DATA;
  value = '';
  constructor(private rs: RestService) {}

  columns = [
    'Flight Number',
    'origination Date',
    'departure Station',
    'arrival Station',
    'latest DepartureTime',
    'latest ArrivalTime',
    'intOrDom',
  ];

  index = [
    'flightNumber',
    'originationDate',
    'departureStation',
    'arrivalStation',
    'latestDepartureTime',
    'latestArrivalTime',
    'intOrDom',
  ];

  flight: flights[] = [];

  ngOnInit(): void {
    this.rs.getflights().subscribe(
      (response) => {
        this.flight = response;
      },
      (error) => {
        console.log('Error Occured' + error);
      }
    );
  }
>>>>>>> testmaster
}

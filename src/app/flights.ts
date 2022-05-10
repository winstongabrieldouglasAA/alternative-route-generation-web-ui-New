export class flights{
  flightNumber: string;
  originationDate: string;
  departureStation: string;
  arrivalStation: string;
  latestDepartureTime: string;
  latestArrivalTime: string;
  intOrDom: string;


constructor(flightNumber, originationDate, departureStation, arrivalStation, latestDepartureTime, latestArrivalTime,intOrDom)
 {
  this.flightNumber= flightNumber;
  this.originationDate= originationDate;
  this.departureStation= departureStation;
  this.arrivalStation= arrivalStation;
  this.latestDepartureTime= latestDepartureTime;
  this.latestArrivalTime=latestArrivalTime;
  this.intOrDom= intOrDom;
  }
}

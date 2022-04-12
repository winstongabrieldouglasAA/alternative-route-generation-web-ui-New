export class FlightRoutes
{
  flightNumber: string;
  originationDate: Date;
  departureStation: string;
  arrivalStation: string
  latestDepartureTime: number;
  latestArrivalTime: number;
  intOrDom: string;


constructor(flightNumber , originationDate,departureStation, arrivalStation, latestDepartureTime, latestArrivalTime, intOrDom)
{
  this.flightNumber = flightNumber;
  this.originationDate = originationDate;
  this.departureStation = departureStation;
  this.arrivalStation = arrivalStation;
  this.latestDepartureTime = latestDepartureTime;
  this.latestArrivalTime = latestArrivalTime;
  this.intOrDom = intOrDom;
}
}

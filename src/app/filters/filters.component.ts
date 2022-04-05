import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  showFiller = false;
  ZonesList: string;
  seasons: string[] = ['A', 'B', 'C', 'D','E'];
  constructor() { }

  ngOnInit(): void {
  }

}

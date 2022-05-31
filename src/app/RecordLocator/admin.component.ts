import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  value = 'Enter Airport:';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goRoutes(){
    this.router.navigate(['Routes'])
  }

}

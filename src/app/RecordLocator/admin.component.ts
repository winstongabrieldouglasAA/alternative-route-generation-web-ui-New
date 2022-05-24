import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  value = 'Enter Airport:';

  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit(): void {
  }
  goRoutes(){
    this.router.navigate(['Routes']);
  }
}

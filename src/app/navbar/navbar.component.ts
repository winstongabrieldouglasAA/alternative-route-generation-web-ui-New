import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  constructor(private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate(['RecordLocator']);
  }
  ngOnInit(): void {
  }
goRoutes(){
  this.router.navigate(['Routes'])
}
}

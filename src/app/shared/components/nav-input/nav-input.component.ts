import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-input',
  templateUrl: './nav-input.component.html',
  styleUrls: ['./nav-input.component.css']
})
export class NavInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie( value: string){
    console.log(`El valor es: ${value}`);
  }

}

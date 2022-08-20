import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideimg1:string="assets/Aquarium_Plants_online.jpg"
  slideimg2:string="assets/slide2.jpg"
  slideimg3:string="assets/slide3.jpg"



}

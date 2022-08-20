import { Component, OnInit } from '@angular/core';
import { Reviewform } from '../contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  fm = new Reviewform


  ngOnInit(): void {
  }

  submitdata(){
    alert(this.fm)
  }

  click(){
    alert(this.fm)
  }



}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {



    // name = new FormControl()
    // email = new FormControl()
    profileForm = new FormGroup(
      {
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        email:new FormControl('',[Validators.required,Validators.email]),
        age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(30)])
      }
    )
    constructor() { }
  
    ngOnInit(): void {
    }
  
    submitData()
    {
      console.log(this.profileForm.value);
      
    }
  
    get age():FormControl{
      return this.profileForm.get('age') as FormControl
    }

}

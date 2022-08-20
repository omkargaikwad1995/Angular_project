import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aquarium';
  myimage:string="assets/images/fish.png"

  constructor(
    private productService:ProductsService,
    private plantService:ProductsService,
    private foodService:ProductsService,
    private fishService:ProductsService
  ){}

  
  ngOnInit(): void {
    this.plantService.getCartValue().subscribe(val=> this.cv=val)
  }


  cv=0
  showCartValue()
  {
    console.log(this.productService.cartValue)
    this.cv=this.productService.cartValue
    this.cv=this.plantService.cartValue
    this.cv=this.foodService.cartValue
    this.cv=this.fishService.cartValue
  }




}


  



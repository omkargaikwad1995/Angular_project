import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getAccessProduct().subscribe(
      data=>{
        this.products=data;
      }
    )
      
  
  }




  products:Products[]=[
  ]

  SearchByName=''
  FilterByName(event:any){
    console.log(event.target.value)
    this.SearchByName=event.target.value
    this.products=this.products.filter(product=> product.name.toLowerCase().includes(this.SearchByName.toLowerCase()))
  }

  addToCart()
  {
    this.productService.increaseCartValue()
    console.log("addedd to cart")
  }



  

}


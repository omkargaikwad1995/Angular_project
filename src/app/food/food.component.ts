import { Component, OnInit } from '@angular/core';
import { foodProduct } from '../food-product';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  foodProduct: any;

  constructor(
    private foodService:ProductsService) { }
  loading=false
  ngOnInit(): void {
    this.loading=true


    //this.Fish_food=this.foodService.getfoodProducts()
    this.foodService.getfoodProducts().subscribe(
      data=>{
        this.loading=false;
        this.Fish_food=data;
      }


    )



  }


  cardText={
    'color':'blue',
    'font-family':'Arial'
  }


  SearchByName=''
  FilterByName(event:any){
    console.log(event.target.value)
    this.SearchByName=event.target.value
    this.Fish_food=this.Fish_food.filter(product=> product.name.toLowerCase().includes(this.SearchByName.toLowerCase()))
  }

  start_index=0
  end_index=4
  item_per_page=4
  page_number=1

  nextPage(page_number:number)
  {
    this.start_index=(page_number-1)*this.item_per_page
    this.end_index=(page_number)*this.item_per_page
  }
  


  Fish_food:foodProduct[]=[
    ]

  foodCart()
  {
    this.foodService.increaseCartValue()
    console.log("food added to kart")
  }

}

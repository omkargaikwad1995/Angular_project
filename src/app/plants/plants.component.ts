import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { plantproduct } from '../plant-product';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  constructor(private plantService:ProductsService) { }

  private subscribed!:Subscription

  ngOnInit(): void {
    this.subscribed=this.plantService.getObs3().subscribe(
    val=> {console.log(val)},
    err=> {console.log(err)},
    ()=> {console.log("obs3 is completed")}
    )

    this.plants=this.plantService.getProducts()
    
    
  
  }

  smallimg:string="assets/seed (2).jpg"


  private _SearchByName=''
  // FilterByName(event:any){
  //   console.log(event.target.value)
  //   this.SearchByName=(event.target.value)
  //   this.plants=this.plants.filter(product=> product.name.toLowerCase().includes(this.SearchByName.toLowerCase()))
  // }

  get SearchByName()
  {
    return this._SearchByName
  }

  set SearchByName(product_name)
  {
    this._SearchByName=product_name
    this.plants=this.plants.filter(product=> product.name.toLowerCase().includes(product_name.toLowerCase()))
  }


  plants:plantproduct[]=[

  ]


  plantCart()
  {this.plantService.increaseCartValue()
    console.log("plant added to kart")
  }

  UnsubscribeObs(){
    this.subscribed.unsubscribe()
    console.log("unsubscribed")
  }

  



}

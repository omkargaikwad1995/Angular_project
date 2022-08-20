import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.scss']
})
export class FishComponent implements OnInit {

  constructor(private fishService:ProductsService) { }

  ngOnInit(): void {
  }


  SearchFish=''
  FilterfishByName(event:any){
    this.SearchFish=event.target.value
    this.fish_items=this.fish_items.filter(product=> product.name.toLowerCase().includes(this.SearchFish.toLowerCase()))

  }

  fish_items=[
    {
      id:1,
      name:"albino_japan grass_guppy",
      price:200,
      fish_img:"assets/images/fishes/red-swordtail-fish-300x300.jpg"
      
    },
    {
      id:2,
      name:"Albino koi swordtail",
      price:350,
      fish_img:"assets/images/fishes/full-red-guppy-300x300.jpg"
    },
    {
      id:3,
      name:"Black sakura shrimp",
      price:150,
      fish_img:"assets/images/fishes/black-sakura-shrimp-300x300.jpg"
    },
    {
      id:4,
      name:"blue_rainbowfish",
      price:250,
      fish_img:"assets/images/fishes/mango-platy-300x300_1_.jpg"
    },
    {
      id:5,
      name:"blue_shrimp german_yellow_guppy",
      price:300,
      fish_img:"assets/images/fishes/orange_rili_shrimp.jpg"
    },
    {
      id:6,
      name:"cobra-guppy",
      price:350,
      fish_img:"assets/images/fishes/cobra-guppy-300x300.jpg"
    },
    {
      id:7,
      name:"endler-guppy",
      price:400,
      fish_img:"assets/images/fishes/endler-guppy-300x300_1_.jpg"
    },
    {
      id:8,
      name:"full-red-guppy",
      price:200,
      fish_img:"assets/images/fishes/full-red-guppy-300x300.jpg"
    },
    {
      id:9,
      name:"german_yellow_guppy",
      price:100,
      fish_img:"assets/images/fishes/german_yellow_guppy_1.jpg"
    },
    {
      id:10,
      name:"glowlight-tetra",
      price:150,
      fish_img:"assets/images/fishes/glowlight-tetra-300x300.jpg"
    },
    {
      id:11,
      name:"golden_phoenix_guppy",
      price:250,
      fish_img:"assets/images/fishes/cobra-guppy-300x300.jpg"
    },
    {
      id:12,
      name:"mango-platy",
      price:300,
      fish_img:"assets/images/fishes/mango-platy-300x300_1_.jpg"
    },
    {
      id:13,
      name:"orange_rili_shrimp phoenix_guppy",
      price:200,
      fish_img:"assets/images/fishes/orange_rili_shrimp.jpg"
    },
    {
      id:14,
      name:"pingu_guppy",
      price:100,
      fish_img:"assets/images/fishes/red-panda-guppy-300x300.jpg"
    },
    {
      id:15,
      name:"platinum_red_big_ear_guppy",
      price:150,
      fish_img:"assets/images/fishes/platinum_red_big_ear_guppy.jpg"
    },
    {
      id:16,
      name:"red_lace_guppy",
      price:250,
      fish_img:"assets/images/fishes/black-sakura-shrimp-300x300.jpg"
    },
    {
      id:17,
      name:"red-panda-guppy",
      price:300,
      fish_img:"assets/images/fishes/red-panda-guppy-300x300.jpg"
    },
    {
      id:18,
      name:"red-swordtail-fish",
      price:250,
      fish_img:"assets/images/fishes/red-swordtail-fish-300x300.jpg"
    },
    {
      id:19,
      name:"white-tuxedo-guppy",
      price:300,
      fish_img:"assets/images/fishes/white-tuxedo-guppy-3-300x300.jpg"
    },
    {
      id:20,
      name:"platinum_red_big_ear_guppy",
      price:150,
      fish_img:"assets/images/fishes/platinum_red_big_ear_guppy.jpg"
    },
  ]

  fishCart()
  {
    this.fishService.increaseCartValue()
    console.log("fish added to kart")
  }



}

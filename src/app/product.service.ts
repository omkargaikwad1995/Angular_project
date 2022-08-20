import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable, of, Subject } from "rxjs";
import { foodProduct } from "./food-product";
import { plantproduct } from "./plant-product";
import { Products } from "./products";



@Injectable({
    providedIn:"root"
})

export class ProductsService
{
    getfoodproduct(): any {
    }
    cartValue=0
    cartValue$=new Subject<number>()

    increaseCartValue()
    {
        this.cartValue+=1
        this.cartValue$.next(this.cartValue)
    }
    
    decreaseCartValue()
    {
        this.cartValue-=1
    }

    getCartValue()
    {
        return this.cartValue$
    }




    private Obs3$= new Observable(
        observe=>{
            observe.next("omkar");
            setTimeout(()=>{
                observe.next(20);
            },4000)
            observe.next(635);
            observe.next("hii");
            //observe.complete()
        }
    )

    getObs3():Observable<any>
    {
        return this.Obs3$
    }


    constructor(private http:HttpClient){}

    plants:plantproduct[]=[
        {
          id:1,
          name:"Acmella repens",
          price:200,
          img:"assets/images/plants/acmella_repens.jpg"
          
        },
        {
          id:2,
          name:"Alternanthera ficoidea",
          price:350,
          img:"assets/images/plants/alternanthera_ficoidea.jpg"
        },
        {
          id:3,
          name:"Alternanthera sessilis",
          price:150,
          img:"assets/images/plants/alternanthera_sessilis_purple.jpg"
        },
        {
          id:4,
          name:"Ammania SP bonsai",
          price:250,
          img:"assets/images/plants/ammannia-sp-bonsai-300x300.jpg"
        },
        {
          id:5,
          name:"Bacopa caroliniana",
          price:300,
          img:"assets/images/plants/bacopa_caroliniana.jpg"
        },
        {
          id:6,
          name:"Hypgrophila araguaia",
          price:350,
          img:"assets/images/plants/hygrophila_araguaia.png"
        },
        {
          id:7,
          name:"Hyptis lorentizana",
          price:400,
          img:"assets/images/plants/hyptis_lorentziana.jpg"
        },
        {
          id:8,
          name:"Lilaeopsis brasilin",
          price:200,
          img:"assets/images/plants/lilaeopsis-brasiliensis-300x300.jpg"
        },
        {
          id:9,
          name:"Myrophyllum aquatic",
          price:100,
          img:"assets/images/plants/myriophyllum_aquaticum_2.jpg"
        },
        {
          id:10,
          name:"Nitella",
          price:150,
          img:"assets/images/plants/nitella-300x300_1_.jpg"
        },
        {
          id:11,
          name:"Polygonum SP",
          price:250,
          img:"assets/images/plants/nitella-300x300_1_.jpg"
        },
        {
          id:12,
          name:"Vallisneria",
          price:300,
          img:"assets/images/plants/vallisneria-nana-300x300.jpg"
        }
    ]


    getProducts()
    {
        return this.plants
    }

    Fish_food:foodProduct[]=[
      {
        id:1,
        name:"aura_healthy_betta",
        price:200,
        bgcolor:true,
        food_img:"assets/images/food/aura_healthy_betta.jpg"
        
      },
      {
        id:2,
        name:"hikari-cichlid",
        price:350,
        bgcolor:true,
        food_img:"assets/images/food/hikari-cichlid-gold-fish-food-medium-300x300_1_.jpg"
      },
      {
        id:3,
        name:"indian_almond_leaves",
        price:150,
        bgcolor:true,
        food_img:"assets/images/food/indian_almond_leaves_fish_food.jpg"
      },
      {
        id:4,
        name:"jbl_maris_main_food_flakes",
        price:250,
        bgcolor:true,
        food_img:"assets/images/food/jbl_maris_main_food_flakes_250ml_45g_2.jpg"
      },
      {
        id:5,
        name:"blood_parrot_fish_food",
        price:300,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_blood_parrot_fish_food_20g.jpg"
      },
      {
        id:6,
        name:"ocean_free",
        price:350,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_fh-g1_pro_head_fish_food_120g.jpg"
      },
      {
        id:7,
        name:"redsyn_flower fish_food",
        price:400,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_of_fh-g1_pro_redsyn_flower_horn_fish_food_pellets_120_g_1.jpg"
      },
      {
        id:8,
        name:"ocean_free_super_miniature",
        price:200,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_super_miniature_110_ml_70g_1.jpg"
      },
      {
        id:9,
        name:"ocean_free_xo_ever_red",
        price:100,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_xo_ever_red_100g.jpg"
      },
      {
        id:10,
        name:"ocean_free_super_redsyn",
        price:150,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_xo_super_redsyn_120g.jpg"
      },
      {
        id:11,
        name:"ocean_free_xo_turtle_sticks",
        price:250,
        bgcolor:true,
        food_img:"assets/images/food/ocean_free_xo_turtle_sticks_280ml_110_g.jpg"
      },
      {
        id:12,
        name:"optimum-cichlid-quick-red",
        price:300,
        bgcolor:true,
        food_img:"assets/images/food/optimum-cichlid-quick-red-300x300.jpg"
      },
      {
        id:13,
        name:"shrimp_algae_food",
        price:200,
        bgcolor:true,
        food_img:"assets/images/food/shrimp_algae_food.jpg"
      },
      {
        id:14,
        name:"taiyo_aini_fish_food",
        price:100,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_aini_fast_red_fish_food.jpg"
      },
      {
        id:15,
        name:"taiyo_guppy_bit_1",
        price:150,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_guppy_bit_1.jpg"
      },
      {
        id:16,
        name:"taiyo_high_nutritious_food",
        price:250,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_high_nutritious_food_for_all_aquarium_fish.jpg"
      },
      {
        id:17,
        name:"taiyo_micro_pellet_fishfood",
        price:300,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_micro_pellets_fish_food.jpg"
      },
      {
        id:18,
        name:"taiyo_tropical_flake_food",
        price:250,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_tropical_flake_food.jpg"
      },
      {
        id:19,
        name:"tetra_flakes",
        price:300,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_turtle_food_45g.jpg"
      },
      {
        id:20,
        name:"taiyo_aini_fish_food",
        price:100,
        bgcolor:true,
        food_img:"assets/images/food/taiyo_aini_fast_red_fish_food.jpg"
      },
    ]

    getfoodProducts():Observable<foodProduct[]>
    {
        //return of(this.Fish_food).pipe(delay(3000));
        return this.http.get<foodProduct[]>("http://localhost:4200/assets/foodproducts.json");
    }

    products:Products[]=[
      {
        id:1,
        name:"api_tap_water_conditioner_237",
        price:200,
        access_img:"assets/images/access/api_tap_water_conditioner_237_ml.jpg"
        
      },
      {
        id:2,
        name:"aqua_zonic_evo-03_submersible_pump",
        price:350,
        access_img:"assets/images/access/aqua_zonic_evo-03_submersible_pump.jpg"
      },
      {
        id:3,
        name:"aquarium_pond_floating_thermomete",
        price:150,
        access_img:"assets/images/access/aquarium_pond_floating_thermometer.jpg"
      },
      {
        id:4,
        name:"aquarium_round_air_stones plate",
        price:250,
        access_img:"assets/images/access/aquarium_round_air_stones_as-03_1_.jpg"
      },
      {
        id:5,
        name:"aquarium_systems_coralline_booster",
        price:300,
        access_img:"assets/images/access/aquarium_systems_coralline_booster_250ml_1.jpg"
      },
      {
        id:6,
        name:"boyu_sp-1000_submersible_power",
        price:350,
        access_img:"assets/images/access/boyu_sp-1000_submersible_power_head.jpg"
      },
      {
        id:7,
        name:"boyu_under_gravel_water filter",
        price:400,
        access_img:"assets/images/access/boyu_under_gravel_filters_12p.jpg"
      },
      {
        id:8,
        name:"boyu-submersible-filter 250MP",
        price:200,
        access_img:"assets/images/access/boyu-submersible-filter-sp-1000a.jpg"
      },
      {
        id:9,
        name:"champion_mist_maker_with_led",
        price:100,
        access_img:"assets/images/access/champion_mist_maker_with_led.jpg"
      },
      {
        id:10,
        name:"classica_super_defined_hydrometer",
        price:150,
        access_img:"assets/images/access/classica_super_defined_hydrometer.jpg"
      },
      {
      id:11,
      name:"anti_chlorine_conditioner 240ml",
      price:250,
      access_img:"assets/images/access/ocean_free_anti_chlorine_special_aquarium_water_conditioner_240_ml_1.jpg"
      },
      {
      id:12,
      name:"sunsun_wavemaker_pump 200",
      price:300,
      access_img:"assets/images/access/sunsun_wavemaker_jvp_-_200_wave_maker_pump.jpg"
      },
      {
      id:13,
      name:"anti-cloudy capsules",
      price:200,
      access_img:"assets/images/access/ocean_free_anti-cloudy_eye_10_capsules_.jpg"
      },
      {
      id:14,
      name:"internal_bio_foam_filter",
      price:100,
      access_img:"assets/images/access/ocean_free_bf-2_internal_bio_foam_filter.jpg"
      },
      {
      id:15,
      name:"gill_fungus_parasite_240ml",
      price:150,
      access_img:"assets/images/access/ocean_free_gill_fungus_parasite_s_special_medicine_240_ml_1.jpg"
      },
      {
        id:16,
        name:"paraclear_5_g",
        price:250,
        access_img:"assets/images/access/ocean_free_universal_overhead_filter_media_holder.jpg"
      },
      {
        id:17,
        name:"zera_ph_test_kit",
        price:300,
        access_img:"assets/images/access/zera_ph_test_kit.jpg"
      },
      {
        id:18,
        name:"seachem_flourish_potassium_250ml",
        price:250,
        access_img:"assets/images/access/seachem_flourish_potassium_250ml.jpg"
      },
      {
        id:19,
        name:"sunsun_digital_thermometer",
        price:300,
        access_img:"assets/images/access/sunsun_digital_thermometer_wdj-004.jpg"
      },
      {
        id:20,
        name:"sunsun_multi_stage_filter",
        price:100,
        access_img:"assets/images/access/sunsun_hw-603_multi_stage_canister_filter.jpg"
      }
  
  
    ]


    getAccessProduct():Observable<Products[]>{
      return this.http.get<Products[]>("http://localhost:4200/assets/products.json");
    }

    getAccessProductById(id:number):Observable<Products|undefined>{
      return this.http.get<Products[]>("http://localhost:4200/assets/products.json").pipe
      (map(products=>{return products.find(product=>product.id===id)}))
    }


    

    

    




}

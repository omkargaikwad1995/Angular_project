import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reviewform } from '../contact-form';
import { ProductsService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private productService:ProductsService
  ) { }
  fechted_products$!:Observable<Products|undefined>

  ngOnInit(): void {
    const id=+this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    
    this.fechted_products$=this.productService.getAccessProductById(id)
    
  }

  fm= new Reviewform

  products=[
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

}

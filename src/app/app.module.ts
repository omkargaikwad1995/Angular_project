import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PlantsComponent } from './plants/plants.component';
import { FishComponent } from './fish/fish.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { HyphenConvertorPipe } from './custom_pipe';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
  {path:"home", component:HomeComponent},
  {path:"plants", component:PlantsComponent},
  {path:"food", component:FoodComponent},
  {path:"fish", component:FishComponent},
  {path:"product", component:ProductComponent},
  {path:"product/:id", component:ProductDetailsComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"profile",component:ProfileFormComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PlantsComponent,
    FishComponent,
    FoodComponent,
    HomeComponent,
    HyphenConvertorPipe,
    ProductDetailsComponent,
    ContactFormComponent,
    ContactUsComponent,
    ProfileFormComponent
  ],

  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

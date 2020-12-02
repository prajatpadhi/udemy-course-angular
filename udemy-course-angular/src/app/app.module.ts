import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './tutorials/success-alert/success-alert.component';
import {WarningAlertComponent} from './tutorials//warning-alert/warning-alert.component';
import { BasicsAssignment2Component } from './tutorials/basics-assignment2/basics-assignment2.component';
import { BasicsAssignment3Component } from './tutorials/basics-assignment3/basics-assignment3.component';
import { HeadersComponent } from './course-project/headers/headers.component';
import { RecipesComponent } from './course-project/recipes/recipes/recipes.component';
import { RecipeListComponent } from './course-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './course-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './course-project/recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './course-project/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './course-project/shopping/shopping-edit/shopping-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    BasicsAssignment2Component,
    BasicsAssignment3Component,
    HeadersComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

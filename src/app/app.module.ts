import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RemoveCommaPipe } from './services/pipes/remove-comma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RemoveCommaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

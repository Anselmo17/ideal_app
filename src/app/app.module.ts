import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modules
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

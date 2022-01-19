import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from 'src/app/material.module';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [ContatosComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ContatosModule { }
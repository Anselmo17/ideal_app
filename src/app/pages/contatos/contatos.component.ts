import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/models/states';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent {

  form: FormGroup;
  paises: any;
  states: State[] = [];

  limitCaracteres = 60;
  limitComentarios = 280;

  isLoanding = true;

  // spinner
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 10;

  constructor(
    private utilService: UtilService
  ) {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pais: new FormControl('1', []),
      endereco: new FormControl(null, []),
      telefone: new FormControl(null, []),
      cidade: new FormControl('35', []), // 35
      comentario: new FormControl('', []),
    });
  }

  ngOnInit() {
    this.listPais();
    this.listStates();
  }

  enviarFormulario() {
    console.log('---------------->', this.form.value);
  }

  reset() {
    this.form.reset();
  }

  getErrorMessage() {
    if (this.form.get('email')?.errors?.required) {
      return 'Você deve inserir um email';
    }
    return this.form.get('email')?.errors ? 'Email inválido!!!' : '';
  }

  getErrorName() {
    return 'Você deve inserir o nome';
  }

  listPais() {
    this.paises = [{ id: 1, name: 'Brasil' }]
  }

  listStates() {
    this.utilService.listStates().subscribe((data: any) => {
      this.states = data;
    });
  }
}

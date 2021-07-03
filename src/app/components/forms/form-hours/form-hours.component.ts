import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/messages/alert.service';
import { RequestHttpService } from 'src/app/services/request/request-http.service';

@Component({
  selector: 'app-form-hours',
  templateUrl: './form-hours.component.html',
  styleUrls: ['./form-hours.component.scss']
})
export class FormHoursComponent implements OnInit {
  public forms: FormGroup;
  public disabledTabs: Boolean;
  public hours = [];
  public minutes = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: RequestHttpService,
    private message: AlertService,
    private route: ActivatedRoute,
    private RouterNavigate: Router
  ) { 
    let id = this.route.snapshot.params.id;
    this.createForms();
    this.setHours();
    this.setMinutes();
    if (id != undefined) {
      this.loadData(id);
      this.disabledTabs = false;
    } else {
      this.forms.reset();
      this.disabledTabs = true;
    }
  }

  ngOnInit(): void {
  }

  /**
   * Se setea valores en el formulario de acuerdo con el ID enviado
   * @param id 
   */
   loadData(id: any){
    //this.message.infoLoading('Recolectando informacion... Espere por favor.');
    this.http.getDataURL(`hours/${ id }/`).subscribe( (data: Object) => {
      let hour = data['hour']['initial_date'].split('T')[1].split(':')[0];
      let minute = data['hour']['initial_date'].split('T')[1].split(':')[1];
      this.forms.setValue({
        cod_user: data['hour']['cod_emp'],
        name_user: data['hour']['name_user'],
        number_case: data['hour']['number_case'],
        initial_date: data['hour']['initial_date'],
        initial_hour: hour,
        initial_minute: minute,
      });
      //this.message.closeLoading();
    }, err => {
      this.message.errorMessage(`Error: ${ err.message }`);
    });
  }

  setHours(){
    for (let index = 0; index < 24; index++) {
      let value = (index+1) < 10 ? `0${index+1}` : (index+1);
      this.hours.push(value);
    }
  }
  setMinutes(){
    for (let indexMinutes = 0; indexMinutes < 60; indexMinutes++) {
      let value = (indexMinutes+1) < 10 ? `0${indexMinutes+1}` : (indexMinutes+1);
      this.minutes.push(value);
    }
  }

  createForms(){
    this.forms = this.formBuilder.group({
      cod_user: ['', [Validators.required, Validators.minLength(3)]],
      name_user: ['', [Validators.required, Validators.minLength(5)]],
      number_case: ['', [Validators.required, Validators.minLength(4)]],
      initial_date: ['', [Validators.required]],
      initial_hour: ['', [Validators.required]],
      initial_minute: ['', [Validators.required]],
    });
  }

  /**
   * Funcion para Cancelar el proceso
   */
  cancel(){
    this.RouterNavigate.navigate(['extraHours']);
  }

  /**
   * Añadir
   */
   add(){
    if (this.forms.invalid) {
      return Object.values( this.forms.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      let dateInit = new Date(this.forms.value.initial_date);
      let month = (dateInit.getMonth()+1) < 10 ? `0${dateInit.getMonth()+1}` : dateInit.getMonth();
      let day = (dateInit.getUTCDate()+1) < 10 ? `0${dateInit.getUTCDate()+1}` : dateInit.getUTCDate();
      const authData = {
        cod_emp: this.forms.value.cod_user,
        name_user: this.forms.value.name_user,
        number_case: this.forms.value.number_case,
        initial_date: `${dateInit.getFullYear()}-${month}-${day}T${this.forms.value.initial_hour}:${this.forms.value.initial_minute}:00.0Z`,
      };
      this.message.infoLoading(`Agregando Registro ${ authData.number_case }.`)
      this.http.postDataURL('hours/',authData).subscribe( resp =>{
        this.RouterNavigate.navigate(['extraHours', 'forms', resp['hour']['_id']]);
        this.message.mixinSuccesMessage(`Registro ${ authData.number_case } agregado.`);
      }, err => {
        console.error(err);
        this.message.errorMessage(err.message);
      });
    }
  }

  /**
   * Editar
   */
  edit() {
    let id = this.route.snapshot.params.id;
    if (this.forms.invalid) {
      return Object.values( this.forms.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      let dateInit = new Date(this.forms.value.initial_date);
      let month = (dateInit.getMonth()+1) < 10 ? `0${dateInit.getMonth()+1}` : dateInit.getMonth();
      let day = (dateInit.getUTCDate()+1) < 10 ? `0${dateInit.getUTCDate()+1}` : dateInit.getUTCDate();
      const authData = {
        cod_emp: this.forms.value.cod_user,
        name_user: this.forms.value.name_user,
        number_case: this.forms.value.number_case,
        initial_date: `${dateInit.getFullYear()}-${month}-${day}T${this.forms.value.initial_hour}:${this.forms.value.initial_minute}:00.0Z`,
      };
      this.message.infoLoading(`Agregando Registro ${ authData.number_case }.`)
      this.http.putDataURL(`hours/${ id }/`,authData).subscribe( resp =>{
        this.RouterNavigate.navigate(['extraHours', 'forms', id]);
        this.message.mixinSuccesMessage(`Registro ${ authData.number_case } editado.`);
      }, err => {
        console.error(err);
        this.message.errorMessage(err.message);
      });
    }
  }

}

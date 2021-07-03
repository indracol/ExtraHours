import { Injectable } from '@angular/core';
// Modulo de Mensajes de Alerta
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  infoLoading(Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      allowOutsideClick: false,
      text: Message,
      icon: 'info',
    });
    // Efecto de Cargando
    Swal.showLoading(); 
  }

  errorMessage(Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      title: 'Error de Recoleccion de Datos',
      text: Message,
      icon: 'error',
    });
  }

  successMessage(Message: string){
    // sweetalert2 para mensaje de alertas 
    Swal.fire({
      // se usa para no cerrar cuadro de texto al dar click por fuera de la ventana
      title: 'Accion Exitosa',
      text: Message,
      icon: 'success',
    });
  }

  closeLoading(){
    Swal.close();
  }

  mixinSuccesMessage(Message: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: Message
    })
  }

  mixinInfoMessage(Message: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'info',
      title: Message
    })
  }

  mixinErrorMessage(Message: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: Message
    })
  }

}

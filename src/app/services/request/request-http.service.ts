import { Injectable } from '@angular/core';
// Headers para los encabezados y HTTP para hacer las peticiones
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {
  private URL: String = `https://extra-hours-indra.herokuapp.com//api/`;
  constructor( private HTTP: HttpClient ) { }

  userToken: any;
  saveTokenId( idToken: string ){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  isAuthenticateUser(): boolean{
    return this.userToken.length > 2;
  }

  readToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }  

  saveDataLocalStorage(nameItem: string, valueItem: string){
    localStorage.setItem(nameItem, valueItem);
  }

  saveDataSessionStorage(nameItem: string, valueItem: string){
    sessionStorage.setItem(nameItem, valueItem);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('username_id');
    localStorage.removeItem('id_su');
    localStorage.removeItem('data_pmn');
  }

  /**
   * Peticion GET
   * @param URLContext 
   * @param sendData 
   */
  getDataURL(URLContext: string, sendData?: any){
    let Header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.get(`${ this.URL }${ URLContext }`, { headers: Header, params: sendData });
  }

  /**
   * Metodo de Envio de Datos
   * @param URLContext 
   * @param DataSend 
   */
  login(URLContext: string, DataSend: any){
    let Header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.HTTP.post(`${ this.URL }${ URLContext }`, DataSend, {headers: Header});
  }

  /**
   * Metodo de Envio de Datos
   * @param URLContext 
   * @param DataSend 
   */
  postDataURL(URLContext: string, DataSend: any){
    let Header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.post(`${ this.URL }${ URLContext }`, DataSend, {headers: Header});
  }
  
  /**
   * Metodo de Envio de Datos
   * @param URLContext 
   * @param DataSend 
   */
  postDataURLGetFile(URLContext: string, DataSend: any){
    let Header = new HttpHeaders({
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.post(`${ this.URL }${ URLContext }`, DataSend, {headers: Header, responseType: 'blob'});
  }

  /**
   * Metodo de Envio de Datos
   * @param URLContext 
   * @param DataSend 
   */
  postFileURL(URLContext: string, DataSend: any){
    let Header = new HttpHeaders({
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.post(`${ this.URL }${ URLContext }`, DataSend, {headers: Header});
  }

  /**
   * Metodo de Eliminacion
   * @param URLContext 
   */
  deleteDataURL(URLContext: string){
    let Header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.delete(`${ this.URL }${ URLContext }`,{headers: Header})
  }

  /**
   * 
   * @param URLContext 
   * @param DataSend 
   */
  putDataURL(URLContext: string, DataSend: any){
    let Header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${ localStorage.getItem('token') }`
    });
    return this.HTTP.put(`${ this.URL }${ URLContext }`, DataSend, {headers: Header})
  }

}

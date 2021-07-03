import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListHoursModel } from 'src/app/models/models.model';
import { AlertService } from 'src/app/services/messages/alert.service';
import { RequestHttpService } from 'src/app/services/request/request-http.service';

@Component({
  selector: 'app-extra-hours',
  templateUrl: './extra-hours.component.html',
  styleUrls: ['./extra-hours.component.scss']
})
export class ExtraHoursComponent implements OnInit {

  private dataList: ListHoursModel[];
  public dataSource: MatTableDataSource<ListHoursModel>
  public displayedColumns: string[] = ['number','cod_user', 'name_user', 'number_case', 'initial_date', 'approval','Edit','Delete'];

  constructor(
    private http: RequestHttpService,
    private message: AlertService,
    private RouterNavigate: Router
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.listHours();
  }

  add(){
    this.RouterNavigate.navigate(['extraHours','forms']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Metodo para Listar Horas
   */
  listHours(showMessage: boolean = true){
    if (showMessage) {
      this.message.infoLoading('Recolectando informacion... Espere por favor.');
    }
    this.http.getDataURL('hours').subscribe( (data: any) => {
      this.dataList = [];
      let contador: number = 0
      console.log(data)
      Object.values( data.hours ).forEach( (controlData: any) => {
        contador += 1;
        this.dataList.push({
          number: contador,
          id: controlData._id,
          cod_user: controlData.cod_emp,
          name_user: controlData.name_user,
          number_case: controlData.number_case,
          initial_date: controlData.initial_date,
          approval: controlData.approval,
          Delete: controlData.id,
          Edit: controlData.id
        });
      });
      this.dataSource = new MatTableDataSource<ListHoursModel>(this.dataList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      if (showMessage) {
        this.message.closeLoading();
      }
    }, err => {
      this.message.errorMessage(`Error: ${ err.message }`);
    });
  }

}

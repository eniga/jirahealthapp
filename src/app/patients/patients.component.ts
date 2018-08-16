import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PatientModel } from '../models';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  displayedColumns: string[] = ['patientId', 'firstName', 'middleName', 'lastName', 'phoneNumber', 'actions'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: MatTableDataSource<PatientModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  patients: PatientModel[] = []
  patient: PatientModel;
  filterValue: string;

  constructor(private service: PatientsService) { }

  ngOnInit() {
    this.GetPatients();
  }

  GetPatients(){
    this.patients = this.service.GetAllPatients();
    this.dataSource = new MatTableDataSource(this.patients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  GetPatient(patient){
    console.log(patient);
  }

  EditPatient(i, patient){
    console.log(i);
    console.log(patient);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Method to export to Excel
  ExportTable(){
    console.log(this.dataSource.data);
  }

  // Method to Add new Patient
  AddPatient(){

  }

}

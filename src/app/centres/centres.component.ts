import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CentresService } from './centres.service';
import { CountryModel } from '../models';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.scss']
})
export class CentresComponent implements OnInit {

  displayedColumns: string[] = ['name', 'capital', 'region', 'subregion', 'population', 'actions'];
  dataSource: MatTableDataSource<CountryModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  countries: Array<CountryModel> = [];
  filterValue: string;
  total: number;

  constructor(private service: CentresService) { }

  ngOnInit(): void {
    this.GetCountries();
  }

  GetCountries() {
    this.service.GetCountries().subscribe((data: Array<CountryModel>) => {
      this.countries = data;
      this.dataSource = new MatTableDataSource(this.countries);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.updateTotal();
    })
  }

  onRowClicked(row){
    console.log('Row clicked: ', row);
  }

  // Method to filter the displayed data, used for search
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.updateTotal();
  }

  // Method to remove an element from the array
  removeCentre(element, filterValue){
    // Get the index of the element
    let i = this.countries.findIndex(x => x.name == element.name);

    // Remove element from the countries array
    this.countries.splice(i, 1);

    // Rebind dataSource data array to countries array
    this.dataSource = new MatTableDataSource(this.countries);
    
    // Check if the data table is filtered, if filtered then filter the returned data again
    if(filterValue != undefined){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // Update the number of total available records in the array
    this.updateTotal();

    // Re-initialize pagination and sorting
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Method to return selected centre details
  selectedCentre(element){
    console.log(element);
  }

  // Method to update the number of total available records in the array
  updateTotal(){
    this.total = this.dataSource.filteredData.length == undefined ? this.dataSource.data.length : this.dataSource.filteredData.length;
    // console.log(this.total);
  }

  // Method to export to Excel
  ExportTable(){

  }

  // Method to Add new Centre
  AddCentre(){

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceKinds = [];
  serviceTypes = [{
    'Id': 1,
    'name': 'Immunization',
    'kinds': [
      'At birth',
      '6 weeks',
      '10 weeks',
      '14 weeks',
      '6 months',
      '9 months',
      '12 months'
    ]
  },
  {
    'Id': 2,
    'name': 'Antenatal Care',
    'kinds': [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      'Other'
    ]
  },
  {
    'Id': 3,
    'name': 'Postnatal Care',
    'kinds': [
      '1 day',
      '3 days',
      '7 days & after',
      'Other'
    ]
  },
  {
    'Id': 4,
    'name': 'Family Planning',
    'kinds': [
      'Oral Pill',
      'Injectable',
      'Inplant',
      'IUCD',
      'Other'
    ]
  }];
  serviceKind : {};
  serviceTypeId: number;
  serviceTypeName: string;

  serviceType : {
    'Id': number,
    'name': string,
    'kinds': Array<string>
  };
  resultKind : string;
  resultType : string;

  constructor() { }

  ngOnInit() {
  }

  loadKind(service){
    this.serviceKinds = service.kinds;
  }

  addType() {
    // this.resultType = 'Description cannot be blank';
    // return false;
    this.serviceType.Id = this.serviceTypeId;
    this.serviceType.name = this.serviceTypeName;
    this.serviceType.kinds = [];
    this.serviceTypes.push(this.serviceType);
    this.serviceType = {'Id': 0,'name':'', 'kinds':[]};
  }

  editType(service){
    this.serviceTypeId = service.Id;
    this.serviceTypeName = service.name;
    this.serviceType.kinds = service.kinds;
  }

  removeType(i, Id) {
    this.serviceTypes.splice(i, 1);
  }

  addKind(){
    this.serviceKinds.push(this.serviceKind);
    this.serviceKind = '';
  }

  removeKind(i){
    this.serviceKinds.splice(i, 1);
  }

}

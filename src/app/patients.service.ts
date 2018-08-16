import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { PatientModel } from './models';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients: Array<PatientModel> = [
    {patientId: 1, firstName: 'Henry', middleName: 'Philip', lastName: 'Jacob', phoneNumber: '03841769469', dob: new Date('31/10/1973'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 2, firstName: 'Taiwo', middleName: 'Idowu', lastName: 'Alao', phoneNumber: '28389099152', dob: new Date('07/11/1975'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 3, firstName: 'Ben', middleName: 'Lawrence', lastName: 'Carson', phoneNumber: '27693131433', dob: new Date('25/12/1977'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 4, firstName: 'Karen', middleName: 'Eloke', lastName: 'Young', phoneNumber: '49450834889', dob: new Date('23/09/1978'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 5, firstName: 'Jacob', middleName: 'John', lastName: 'Momoh', phoneNumber: '02932531981', dob: new Date('27/01/1981'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 6, firstName: 'Naruto', middleName: 'Minato', lastName: 'Uzumaki', phoneNumber: '44674102134', dob: new Date('11/03/1988'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 7, firstName: 'Sasuke', middleName: 'Itachi', lastName: 'Uchiha', phoneNumber: '17626028079', dob: new Date('07/11/1988'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 8, firstName: 'Hinata', middleName: 'Hanabi', lastName: 'Hyuuga', phoneNumber: '03259778637', dob: new Date('21/09/2006'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 9, firstName: 'Tobi', middleName: 'Izuna', lastName: 'Madara', phoneNumber: '44832800019', dob: new Date('05/03/2010'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''},
    {patientId: 10, firstName: 'Kenneth', middleName: 'Kano', lastName: 'Kent', phoneNumber: '05717169325', dob: new Date('12/05/2010'), uniqueCode: '', registrationDate: new Date('16/08/2018'), residentialWard: '', settlement: ''}
  ]

  constructor(private http: HttpClient) { }

  GetAllPatients() {
    //return this.http.get<PatientModel[]>('');
    return this.patients;
  }

  GetPatient(patientId: number){
    return this.patients.filter(x => x.patientId = patientId);
  }

  AddPatient(patient: PatientModel){
    this.patients.push(patient);
  }

  EditPatient(i, patient: PatientModel){
    this.patients[i] = patient;
  }
}

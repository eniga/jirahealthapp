import { Injectable } from '@angular/core';

@Injectable()

export class PatientModel {
    patientId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    dob: Date;
    uniqueCode: string;
    registrationDate: Date;
    residentialWard: string;
    settlement: string;
}

export class CountryModel {
    name: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
}
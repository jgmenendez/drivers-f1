import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) { 
    console.log('Drivers Service listo');
  }

  getDrivers() {
    return this.http.get('https://ergast.com/api/f1/drivers.json?limit=1000')
      .pipe(map(data => data['MRData'].DriverTable.Drivers));
  }

  getDriver(termino: string) {
    return this.http.get(`https://ergast.com/api/f1/drivers/${ termino }.json`)
      .pipe(map(data => data['MRData'].DriverTable.Drivers));
  }

  getDriverPage(id: string) {
    return this.http.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${ id }`);
  }

  getDriverNat() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getDriverStats(id: string) {
    return this.http.get(`https://ergast.com/api/f1/drivers/${ id }/results.json?limit=1000`)
      .pipe(map(data => data['MRData'].RaceTable.Races));
  }

  getConstructors() {
    return this.http.get('https://ergast.com/api/f1/constructors.json?limit=500')
      .pipe(map(data => data['MRData'].ConstructorTable.Constructors));
  }

  getConstructor(id: string) {
    return this.http.get(`https://ergast.com/api/f1/constructors/${ id }/drivers.json?limit=1000`)
      .pipe(map(data => data['MRData'].DriverTable.Drivers));
  }

  getConstructorStats(id: string, driverId: string) {
    return this.http.get(`https://ergast.com/api/f1/drivers/${ driverId }/constructors/${ id }/results.json?limit=1000`)
      .pipe(map(data => data['MRData'].RaceTable.Races));
  }

  getCircuits() {
    return this.http.get('https://ergast.com/api/f1/circuits.json?limit=500')
      .pipe(map(data => data['MRData'].CircuitTable.Circuits));
  }

  getCircuitStats(id: string) {
    return this.http.get(`https://ergast.com/api/f1/circuits/${ id }/results/1.json?limit=500`)
      .pipe(map(data => data['MRData'].RaceTable.Races));
  }
}
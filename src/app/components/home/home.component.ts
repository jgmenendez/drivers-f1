import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  drivers: any[] = [];

  constructor(private driversService: DriversService, private router: Router) { 
    this.driversService.getDrivers()
      .subscribe((resp: any) => {
        console.log(resp);
        this.drivers = resp;
      });
  }

  verDriver(item: any) {
    let driverPageId, driverPageNat, driverBdate, driverId;

    driverId = item.driverId;
    driverPageId = item.url.slice(29);
    driverPageNat = item.nationality;
    driverBdate = item.dateOfBirth;

    this.router.navigate(['/driver', driverPageId, 'nationality', driverPageNat, 'bdate', driverBdate, 'name', driverId]);
  }

}

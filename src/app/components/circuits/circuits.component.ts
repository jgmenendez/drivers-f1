import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styles: [
  ]
})
export class CircuitsComponent {
  circuits: any[] = [];

  constructor(private driversService: DriversService, private router: Router) { 
    this.driversService.getCircuits()
      .subscribe((resp: any) => {
        console.log(resp);
        this.circuits = resp;
      });
  }

  verCircuit(item: any) {
    let circuitId, circuitName, circuitLocality, circuitCountry;

    circuitId = item.circuitId;
    circuitName = item.circuitName;
    circuitLocality = item.Location.locality;
    circuitCountry = item.Location.country;

    this.router.navigate(['/circuit', circuitId, 'name', circuitName, 'locality', circuitLocality, 'country', circuitCountry]);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styles: [
  ]
})
export class CircuitComponent {
  nameCircuit: string;
  nameLocality: string;
  nameCountry: string;
  circuitStats: any[] = [];

  constructor(private router: ActivatedRoute, private driverService: DriversService) { 
    this.router.params.subscribe(params => {
      this.nameCircuit = params['name'];
      this.nameLocality = params['locality'];
      this.nameCountry = params['country'];

      this.getCircuitStats(params['id']);
    });
  }

  getCircuitStats(id: string) {
    this.driverService.getCircuitStats(id)
      .subscribe(circuit => {
        console.log(circuit);
        this.circuitStats = circuit;
      });
  }

}

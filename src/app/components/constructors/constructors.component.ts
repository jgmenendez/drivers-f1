import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styles: [
  ]
})
export class ConstructorsComponent {
  constructors: any[] = [];

  constructor(private driversService: DriversService, private router: Router) { 
    this.driversService.getConstructors()
      .subscribe((resp: any) => {
        console.log(resp);
        this.constructors = resp;
      });
  }

  verConstructor(item: any) {
    let constructorId, constructorName;

    constructorId = item.constructorId;
    constructorName = item.name;

    this.router.navigate(['/constructor', constructorId, 'name', constructorName]);
  }

}

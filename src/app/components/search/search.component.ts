import { Component } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  driverSearch: any[] = [];

  constructor(private driversService: DriversService) { }

  buscar(termino: string) {
    console.log(termino);

    this.driversService.getDriver(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.driverSearch = data;
      });
  }


}

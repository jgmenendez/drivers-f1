import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styles: [
  ]
})
export class DriverComponent {
  driver: any = {};
  driverNat: any = {};
  driverFilter: any = {};
  driverFlag: string;
  driverAge: number;
  driverStat: any[] = [];
  driverRaces: number;
  driverPoints: number;
  victories: number = 0;
  driverVictories: number;
  podiums: number = 0;
  driverPodiums: number;
  sumaPoints: number = 0;

  constructor(private router: ActivatedRoute, private driverService: DriversService) { 
    this.router.params.subscribe(params => {
      this.getDriverPage(params['id']);
      this.getDriverNat(params['nationality']);
      this.getDriverBdate(params['bdate']);
      this.getDriverStats(params['name']);
    });
  }

  getDriverPage(id: string) {
    this.driverService.getDriverPage(id)
      .subscribe(driver => {
        //console.log(driver);
        this.driver = driver;
      });
  }

  getDriverNat(nationalityParam) {
    this.driverService.getDriverNat()
      .subscribe(nation => {
        this.driverNat = nation;
        this.driverFilter = this.driverNat.filter(nat => nat.demonym === nationalityParam);
        this.driverFlag = this.driverFilter[0].flag;
      });
  }

  getDriverBdate(bdate: Date) {
    let timeDiff = Math.abs(Date.now() - new Date(bdate).getTime());
    this.driverAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getDriverStats(id: string) {
    this.driverService.getDriverStats(id)
      .subscribe(driver => {
        this.driverStat = driver;

        this.driverRaces = driver.length;
        for (let i = 0; i < driver.length; i++) {
          if(driver[i].Results[0].position === "1") {
            this.victories++;
          }

          if(driver[i].Results[0].position == "1" || driver[i].Results[0].position == "2" || driver[i].Results[0].position == "3") {
            this.podiums++;
          }

          this.sumaPoints += Number(driver[i].Results[0].points).valueOf();

        }
        this.driverVictories = this.victories;
        this.driverPodiums = this.podiums;
        this.driverPoints = this.sumaPoints;
      });
  }

}

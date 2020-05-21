import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styles: [
  ]
})
export class ConstructorComponent {
  nameConstructor: string;
  driverStats: any[] = [];
  givenName: string;
  familyName: string;
  victories: number = 0;
  podiums: number = 0;
  points: number = 0;

  constructor(private router: ActivatedRoute, private driverService: DriversService) { 
    this.router.params.subscribe(params => {
      this.nameConstructor = params['name'];

      this.getConstructor(params['id']);
    });
  }

  getConstructor(id: string) {
    this.driverService.getConstructor(id)
      .subscribe(constructor => {
        for(let i = 0; i < constructor.length; i++) {
          this.driverService.getConstructorStats(id, constructor[i].driverId)
            .subscribe(constructorStat => {
              for(let j = 0; j < constructorStat.length; j++) {
                this.givenName = constructorStat[j].Results[0].Driver.givenName;
                this.familyName = constructorStat[j].Results[0].Driver.familyName;

                if(constructorStat[j].Results[0].position === "1") {
                  this.victories++;
                }
      
                if(constructorStat[j].Results[0].position == "1" || constructorStat[j].Results[0].position == "2" || constructorStat[j].Results[0].position == "3") {
                  this.podiums++;
                }
  
                this.points += Number(constructorStat[j].Results[0].points).valueOf();
              }

              this.driverStats.push({
                'givenName': this.givenName, 
                'familyName': this.familyName,
                'races': constructorStat.length,
                'victories': this.victories,
                'podiums': this.podiums,
                'points': this.points
              });

              this.victories = 0;
              this.podiums = 0;
              this.points = 0;
            });
        }
      });

      console.log(this.driverStats);
      //this.arr = this.arr.pipe(map(arr => arr.sort((a,b) => a > b))); // really any sort logic you want
      //this.driverStats = this.driverStats.pipe(map(arr > arr.sort((a,b) => a > b)));
  }

}

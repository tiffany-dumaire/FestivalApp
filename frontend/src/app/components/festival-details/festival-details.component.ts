import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';


import { ActivatedRoute } from '@angular/router';

import { FestivalService } from 'src/app/service/festival.service';


@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})
export class FestivalDetailsComponent implements OnInit {

  @Input() public festival = null;

  constructor(private festivalService: FestivalService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    if (this.route.snapshot.paramMap.has('idFestival')) {
      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      this.getFestivalById(idFestival);
    }

  }

  getFestivalById(idFestival): void {
    console.log(idFestival);
    this.festivalService.getFestivalById(idFestival)
      .subscribe(
        (festivalDTO) => {
          if (festivalDTO) {
            this.festival = festivalDTO;
            console.log(`festival=${JSON.stringify(this.festival)}`);
          }
        }
      );
  }

}

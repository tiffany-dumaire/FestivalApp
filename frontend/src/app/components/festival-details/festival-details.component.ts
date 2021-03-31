import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';


import { ActivatedRoute } from '@angular/router';

import { FestivalService } from 'src/app/service/festival.service';


@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})
export class FestivalDetailsComponent implements OnInit {

  public festival = null;

  constructor(private festivalService: FestivalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    if (this.route.snapshot.paramMap.has('idFestival')) {
      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      this.getFestivalById(idFestival);
    }
  
  }

  getFestivalById(idFestival) : void {
    console.log('coucou');
    this.festival = this.festivalService.getFestivalById(idFestival)
      .pipe(
               tap((festival) => { 
            console.log(JSON.stringify(festival)); })
      )
  }

}

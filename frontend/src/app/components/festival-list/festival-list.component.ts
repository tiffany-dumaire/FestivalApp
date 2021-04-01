import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { FestivalListService } from 'src/app/service/festival-list.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {
  public festivalsy;

  constructor(private festlist: FestivalListService) { }

  ngOnInit(): void {
    this.getFestivalsYear();
  }

  getFestivalsYear(): void {
    
    this.festivalsy = this.festlist.getFestivalsYear().pipe(
      tap((festivalsy) => { console.log(JSON.stringify(festivalsy)); })
    )

  }

}

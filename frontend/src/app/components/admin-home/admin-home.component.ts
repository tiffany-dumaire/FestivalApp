import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { FestivalService } from 'src/app/service/festival.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private festivalService: FestivalService) { }
  public festivalrecent;
  ngOnInit(): void {
    this.getFestivalRecent();
  }

  getFestivalRecent(): void {
    this.festivalrecent = this.festivalService.getFestivalRecent().pipe(
      tap((festivalrecent) => { console.log(JSON.stringify(festivalrecent)); })
    )

  }
}

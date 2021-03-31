import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { FestivalService } from 'src/app/service/festival.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home-fest.component.html',
  styleUrls: ['./admin-home-fest.component.css']
})
export class AdminHomeFestComponent implements OnInit {

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


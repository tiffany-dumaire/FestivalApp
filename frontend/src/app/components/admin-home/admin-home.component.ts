import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Festival } from 'src/app/model/festival';


import { ActivatedRoute } from '@angular/router';

import { FestivalListService } from 'src/app/service/festival-list.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  public festivalsy;
  public festival;


  constructor(private festlist: FestivalListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFestivalsYear();
  }

  getFestivalsYear(): void {
    this.festivalsy = this.festlist.getFestivalsYear().pipe(
      tap((festivalsy) => { console.log(JSON.stringify(festivalsy)); })
    )

  }

}

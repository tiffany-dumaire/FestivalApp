import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ExposantListService } from '../../service/exposant-list.service';

@Component({
  selector: 'app-exposant-list',
  templateUrl: './exposant-list.component.html',
  styleUrls: ['./exposant-list.component.scss']
})

export class ExposantListComponent implements OnInit {
  public exposantlist;

  constructor(private explist: ExposantListService) { }

  ngOnInit(): void {
    this.getExposants();
  }

  getExposants(): void {
    this.exposantlist = this.explist.getExposants().pipe(
      tap((exposantlist) => { console.log(JSON.stringify(exposantlist)); })
    )

  }
}

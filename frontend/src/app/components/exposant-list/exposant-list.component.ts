import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ExposantListService } from '../../service/exposant-list.service';
import { ActivatedRoute } from '@angular/router';
import { Societe } from 'src/app/model/societe';
@Component({
  selector: 'app-exposant-list',
  templateUrl: './exposant-list.component.html',
  styleUrls: ['./exposant-list.component.scss']
})

export class ExposantListComponent implements OnInit {

  @Input() exposants: Societe[] = null;


  constructor(private explist: ExposantListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival')) {

      const idFestival = this.route.snapshot.paramMap.get('idFestival');

      this.getExposantsFestival(idFestival);
    }
  }

  getExposantsFestival(idFestival): void {
    this.explist.getExposantsFestival(idFestival).subscribe(
      (exposantsDTO) => { if (exposantsDTO) { 
        this.exposants = exposantsDTO; 
        //console.log(`festival=${JSON.stringify(this.festival)}`);
      }}
    );

  }
}

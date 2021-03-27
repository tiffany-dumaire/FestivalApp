import { Component, OnInit } from '@angular/core';
import { Festival } from '../../model/festival';
import { FestivalService } from '../../service/festival.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-fest',
  templateUrl: './create-fest.component.html',
  styleUrls: ['./create-fest.component.css']
})
export class CreateFestComponent implements OnInit {
festivals: Festival[];

  constructor(private festivalService: FestivalService) { }

  ngOnInit(): void {

  }

  
  add(nomFestival: string, annee: number, nbTableE1: number, nbTableE2: number, nbTableE3: number, m2E1: number, m2E2: number, m2E3: number, prixE1: number, prixE2: number, prixE3: number ): void {
    nomFestival = nomFestival.trim();
    if (!nomFestival || !annee || !nbTableE1 || nbTableE2! || nbTableE3! || m2E1! || m2E2! || m2E3! || prixE1! || prixE2! || prixE3! ) { return; }
    this.festivalService.addFestival({ nomFestival, annee, nbTableE1, nbTableE2, nbTableE3, m2E1, m2E2, m2E3, prixE1, prixE2, prixE3 } as Festival)
    .subscribe(festival => {
      this.festivals.push(festival);
    });
  }
  


}

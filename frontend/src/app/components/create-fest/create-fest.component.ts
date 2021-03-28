import { Component, OnInit } from '@angular/core';
import { Festival } from '../../model/festival';
import { FestivalService } from '../../service/festival.service';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-fest',
  templateUrl: './create-fest.component.html',
  styleUrls: ['./create-fest.component.css'],
  providers: [FestivalService]
})
export class CreateFestComponent implements OnInit {
public festivals: Festival[];
public festival: Festival;
  
constructor(private festivalService: FestivalService) {
}

  ngOnInit(): void {
    this.resetForm();
  }

  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.festival = {
    idFestival : null,
    nomFestival: "", 
    annee: null,
    nbTableE1: null,
    nbTableE2: null, 
    nbTableE3: null,
    m2E1: null,
    m2E2: null,
    m2E3: null,
    prixE1: null,
    prixE2: null,
    prixE3: null
    }
  }

  onSubmit(
    nomFestival: string, 
    annee: number,
    nbTableE1: number,
    nbTableE2: number, 
    nbTableE3: number,
    m2E1: number,
    m2E2: number,
    m2E3: number,
    prixE1: number,
    prixE2: number,
    prixE3: number
    ) {
   
      this.festivalService.addFestival({nomFestival, annee, nbTableE1, nbTableE2, nbTableE3, m2E1, m2E2, m2E3, prixE1, prixE2, prixE3} as Festival).subscribe(festival => {
        this.festivals.push(festival);
      });
      
  }
  


}

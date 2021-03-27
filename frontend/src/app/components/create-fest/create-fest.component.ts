import { Component, OnInit } from '@angular/core';
import { Festival } from '../../model/festival';
import { FestivalService } from '../../service/festival.service';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-fest',
  templateUrl: './create-fest.component.html',
  styleUrls: ['./create-fest.component.css'],
  //provider: [FestivalService]
})
export class CreateFestComponent implements OnInit {
//festivals: Festival[];
festival: Festival;
  constructor(private festivalService: FestivalService) { }

  ngOnInit(): void {

  }

  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.festivalService.festival = {
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

  onSubmit(form: NgForm) {
   
      this.festivalService.addFestival(form.value).subscribe((res) => {
        this.resetForm(form);
        /*M.toast({ html: 'Saved successfully', classes: 'rounded' });*/
      });
  }
  


}

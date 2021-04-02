import { Component, OnInit } from '@angular/core';
import { Festival } from '../../model/festival';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FestivalService } from '../../service/festival.service';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

/**
 * Create Fest composant : créer un festival
 */
@Component({
  selector: 'app-create-fest',
  templateUrl: './create-fest.component.html',
  styleUrls: ['./create-fest.component.css'],
  providers: [FestivalService]
})

export class CreateFestComponent implements OnInit {
  /**
   * @type Festival[]: liste de festivals
   */
  public festivals: Festival[];
  
  /**
   * @type Festival: festival
   */
  public festival: Festival;
  
  /**
   * @type: FormGroup : Formulaire dans lequel on entre les valeurs
   */
  public form: FormGroup;

/**
 * Constructeur du composant
 * @param formBuilder 
 * @param festivalService 
 */
  constructor(private formBuilder: FormBuilder, private festivalService: FestivalService) {
  }

  /**
   * Ngoninit : on initialise les différents valeurs du formulaires
   */
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomFestival: ['', [
      ]],
      annee: ['', [
      
      ]],
      nbTableE1: ['', [
        
      ]],
      nbTableE2: ['', [
      
      ]],
      nbTableE3: ['', [
      
      ]],
      m2E1: ['', [
      
      ]],
      m2E2: ['', [
       
      ]],
      m2E3: ['', [
 
      ]
      ],
      prixE1: ['', [
     
      ]],
      prixE2: ['', [
       
      ]],
      prixE3: ['', [
     
      ]]
    });
  }

  /**
   * Appelle la methode du service pour créer un festival
   * @param form 
   */
  addFestival(form) {
    this.festivalService.addFestival(this.form.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.resetForm(form);
        }
      })
  }

/**
 * Enlève les valeurs du formulaires si elles ont été rentrées.
 * @param form 
 */
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.festival = {
      idFestival: null,
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


}

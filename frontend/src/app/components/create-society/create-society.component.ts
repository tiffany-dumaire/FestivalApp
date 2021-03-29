import { Component, OnInit } from '@angular/core';
import { Festival } from '../../model/festival';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocieteService } from '../../service/societe.service';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Societe } from 'src/app/model/societe';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.css']

})
export class CreateSocietyComponent implements OnInit {
public societe: Societe;
  public form:FormGroup;
  
constructor(private formBuilder:FormBuilder,private festivalService: SocieteService) {
}

ngOnInit(): void {
  this.form = this.formBuilder.group({
    nomSociete: ['',[
      //Validators.required, 
      //Validators.minLength(4), 
      //Validators.maxLength(4)
    ]],
    adresse: ['',[
      //Validators.required, 
      //Validators.minLength(4), 
      //Validators.maxLength(4)
    ]],
    pays: ['',[
      //Validators.required, 
      //Validators.minLength(4), 
      //Validators.maxLength(4)
    ]],
    editeur: ['',[
      //Validators.required, 
      //Validators.minLength(4), 
      //Validators.maxLength(4)
    ]],
    exposant: ['',[
      //Validators.required, 
      //Validators.minLength(4), 
      //Validators.maxLength(4)
    ]]
  });
}

addSociete(form){
  this.festivalService.addSociete(this.form.value)
    .subscribe({
      next: (res)=>{
       
        console.log(res);
        //this.display();
        //this.groupService.feed();
        this.resetForm(form);
      }
    })
}

  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.societe = {
      idSociete : null,
      nomSociete: "", 
      adresse: "",
      pays: "",
      editeur: null,
      exposant: null
    }
  }

}

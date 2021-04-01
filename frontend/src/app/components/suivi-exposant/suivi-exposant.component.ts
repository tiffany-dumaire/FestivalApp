import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SuiviExposantService } from '../../service/suivi-exposant.service';
import { ActivatedRoute } from '@angular/router';
import { SuiviExposant } from 'src/app/model/suiviexposant';

@Component({
  selector: 'app-suivi-exposant',
  templateUrl: './suivi-exposant.component.html',
  styleUrls: ['./suivi-exposant.component.css']
})
export class SuiviExposantComponent implements OnInit {
  @Input() suiviexposants: SuiviExposant[] = null;
  constructor(private suiviexposantService: SuiviExposantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('idFestival') && this.route.snapshot.paramMap.has('idSociete')) {

      const idFestival = this.route.snapshot.paramMap.get('idFestival');
      const idSociete = this.route.snapshot.paramMap.get('idSociete');
      this.getSuivisExposant(idFestival, idSociete);
    }
  
  }

  public getSuivisExposant(idFestival, idSociete): void {
    this.suiviexposantService.getSuivisExposant(idFestival, idSociete).subscribe(
      (SuiviexposantsDTO) => { if (SuiviexposantsDTO) { 
        this.suiviexposants = SuiviexposantsDTO; 
      }}
    );
  }

}

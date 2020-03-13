import { Component, OnInit, Input } from '@angular/core';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  recetaID: number;

  constructor(private recetasService: RecetasService) { }
  @Input() idReceta: number;

  ngOnInit(): void {
    this.recetasService.currentID.subscribe(id => this.recetaID = id);
    
  }

  click(){
    console.log(this.recetaID);
  }


}

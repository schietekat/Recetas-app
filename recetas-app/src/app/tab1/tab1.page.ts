import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../services/recetas.service';
import { Meal } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  recetas: Meal[] = [];

  constructor(private recetasService: RecetasService, private router: Router) { }

  ngOnInit(): void {
    this.recetasService.obtenerRecetas()
      .subscribe(res => {
        console.log(res);
        this.recetas.push(...res.meals);
      });
    console.log(this.recetas);
  }

  click(id){
    console.log(id);
    this.recetasService.changeID(id);
    this.router.navigateByUrl('/tabs/tab2')
  }

}

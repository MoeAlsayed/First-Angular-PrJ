import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  // I won't need HEROES because i ues now HeroService
  // heroes = HEROES; =>
  heroes: Hero[];

    // Add a private heroService parameter of type HeroService to the constructor
  constructor(private heroService: HeroService) { }
  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

  ngOnInit() {
    // https://angular.io/tutorial/toh-pt4#call-it-in-ngoninit
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // Create a function to retrieve the heroes from the service.
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

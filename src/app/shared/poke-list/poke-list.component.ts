import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      ({ results }) => {
        this.setAllPokemons = results;
        this.getAllPokemons = this.setAllPokemons;
      });
  }

  public getPokemon(value: string) {
    const filterPokemon = this.setAllPokemons.filter((res: any) => !res.name.indexOf(value.toLowerCase()));

    this.getAllPokemons = filterPokemon;
  }
}

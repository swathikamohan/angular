import { Component, OnInit } from '@angular/core';
import { game } from './gamedata.service';

@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.css']
})
export class GameDataComponent implements OnInit {
    
  gamedata: game[] = [];

  constructor(private service: game) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    this.service.getAllGames().subscribe(
      data => { this.gamedata = data },
      error => {
        this.gamedata = [];
        console.log(error);
      }

    );
  }

}

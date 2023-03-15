import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
  
  public onGrow() {
    console.log('grow');
  }

  public onGameOver() {
    alert('GAME OVER! TRY AGAIN');
  }

}

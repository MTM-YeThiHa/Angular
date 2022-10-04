import { Component } from '@angular/core';
import { IGame } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  pageTitle = 'Dynamic! Game List';
  imageWidth = 45;
  imageMargin = 1;
  showImage = true;
  listItem = 'Mario';
  games: IGame[] = [
    {
      'gameId' : 1,
      'gameName' : 'Resident Evil',
      'gameCode' : 'AAA-010101',
      'releaseDate' : 'October 2, 2010',
      'description' : 'Horro-Thriller game series created and developed by Knoami',
      'price' : 24.99,
      'thumbRating': 5.0,
      'imageUrl' : './assets/images/resident-evil.jpg'
    }
  ]; // use the interface name as the data type on the games property.

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}

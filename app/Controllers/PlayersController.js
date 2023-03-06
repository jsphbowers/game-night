import { appState } from "../AppState.js";
import { player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";


export class PlayersController {
  constructor() {
    console.log(appState.players)
    this.drawPlayers()
  }

  drawPlayers() {
    let template = ''
    let players = appState.players
    players.forEach(player => template += player.PlayerTemplate)
    document.getElementById('players').innerHTML = template
  }

  addScore(name) {
    playersService.addScore(name)
    console.log('after service score increased')
    this.drawPlayers()
  }

  minusScore(name) {
    console.log('after service score-minus')
    playersService.minusScore(name)
    this.drawPlayers()
  }
}
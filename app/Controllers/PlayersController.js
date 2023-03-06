import { appState } from "../AppState.js";
import { player } from "../Models/Player.js";


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
    playersService.minusScore(name)
    console.log('after service score-minus')
    this.drawPlayers()
  }
}
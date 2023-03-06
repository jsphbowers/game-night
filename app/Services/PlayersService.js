import { appState } from "../AppState.js"
import { player } from "../Models/Player.js"


class PlayersService {
  addScore(name) {
    let player = appState.players.find(player => player.name == name)
    player.score++
  }

  minusScore(name) {
    let player = appState.players.find(player => player.name == name)
    if (player.score > 0) {
      player.score--
    }
  }

}


export const playersService = new PlayersService()
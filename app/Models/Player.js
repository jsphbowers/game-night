export class player {
  constructor(name) {
    this.name = name,
      this.score = 0
  }

  get PlayerTemplate() {
    return `
    <div class="col-6 d-flex justify-content-between">
        <h2>${this.name}</h2>
        <button class="btn btn-success" onclick="app.playersController.addScore()"><i
            class="mdi mdi-plus-thick"></i></button>
        <h3>${this.score}</h3>
        <button class="btn btn-danger" onclick="app.playersController.minusScore()"><i
            class="mdi mdi-minus-thick"></i></button>
    `
  }
}
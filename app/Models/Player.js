export class player {
  constructor(name, score) {
    this.name = name,
      this.score = score
  }

  get PlayerTemplate() {
    return `
    <div class="col-6 d-flex justify-content-between">
        <h2>${this.name}</h2>
        <button class="btn btn-success" onclick="app.playersController.addScore('${this.name}')"><i
            class="mdi mdi-plus-thick"></i></button>
        <h3>${this.score}</h3>
        <button class="btn btn-danger" onclick="app.playersController.minusScore('${this.name}')"><i
            class="mdi mdi-minus-thick"></i></button>
    `
  }
}
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})
  }

  preload () {
    this.load.image('logo', 'assets/phaserLogo.png')
  }

  create () {
    this.add.sprite(this.cameras.main.width/2, this.cameras.main.height/2, 'logo')
  }
}
import 'phaser'

import GameScene from './scenes/game'

window.game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  canvas: document.getElementById('game'),
  backgroundColor: 0x000,
  scene: [
    GameScene
  ]
})

var config = {
  position: {
    x: 32, // this should be changed in the game logic definition (eg. level starting point)
    y: 150,
  },
  bounce: {
    x: 0,
    y: 0.2,
  },
  gravity: {
    x: 0,
    y: 300,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  physics: true,
  physicsType: 'arcade',
  collideWorldBounds: true,
  animations: [
    {
      name: 'left',
      frames: [0, 1, 2, 3],
      frameRate: 10,
      loop: true,
    },
    {
      name: 'right',
      frames: [5, 6, 7, 8],
      frameRate: 10,
      loop: true,
    }
  ],
  name: 'dude',
  sprite: './assets/dude.png'
};

export {config as default};
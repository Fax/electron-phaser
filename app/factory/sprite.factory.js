/* You can load the config from a json file on the parent level and just pass the contents  */
export default function (config, game) {

  const pos = config.position;
  const bounce = config.bounce;
  const gravity = config.gravity;
  const velocity = config.velocity;
  const animations = config.animations || [];

  const player = game.add.sprite(pos.x, pos.y, config.name);
  if (config.physics) {
    game.physics[config.physicsType].enable(player);

    player.body.bounce.y = bounce.y;
    player.body.bounce.x = bounce.x;
    player.body.gravity.y = gravity.y;
    player.body.gravity.x = gravity.x;
    player.body.velocity.x = velocity.x;
    player.body.velocity.y = velocity.y;
    player.body.collideWorldBounds = config.collideWorldBounds || true;
  }
  animations.forEach((animation) => {
    player.animations.add(animation.name, animation.frames, animation.frameRate, animation.loop);
  });

  return player;
};
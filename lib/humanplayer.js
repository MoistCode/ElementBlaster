import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this.speed = 1;
  }

  changePosition() {
    
  }
}

export default HumanPlayer;

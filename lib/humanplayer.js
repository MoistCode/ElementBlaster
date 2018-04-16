import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);

  }

  _addEventListener() {
    this.addEventListener('keydown', () => {
      
    })
  }

}

export default HumanPlayer;

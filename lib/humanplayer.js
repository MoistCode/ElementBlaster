import Player from './player.js'

class HumanPlayer extends Player {
  constructor(context, canvas) {
    super(context, canvas);
    this._addUserControls();
  }

  _addUserControls() {
    let keysArray = {
      'up': false,
      'left': false,
      'down': false,
      'right': false
    };

    document.addEventListener('keydown', (event) => {
      switch(event.key.toLowerCase()) {
        case 'w':
          keysArray['up'] = true;
          break;
        case 'a':
          keysArray['left'] = true;
          break;
        case 's':
          keysArray['down'] = true;
          break;
        case 'd':
          keysArray['right'] = true;
          break;
      }
      if (keysArray['up']) {
        this.coordY -= 5;
      }
      if (keysArray['left']) {
        this.coordX -= 5;
      }
      if (keysArray['down']) {
        this.coordY += 5;
      }
      if (keysArray['right']) {
        this.coordX += 5;
      }
      this.drawPlayer();
    })

    document.addEventListener('keyup', (event) => {
      switch(event.key.toLowerCase()) {
        case 'w':
          keysArray['up'] = false;
          break;
        case 'a':
          keysArray['left'] = false;
          break;
        case 's':
          keysArray['down'] = false;
          break;
        case 'd':
          keysArray['right'] = false;
          break;
      }
      this.drawPlayer();
    });


  }

}

export default HumanPlayer;

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

    document.addEventListener('keyup', (event) => {
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
      console.log(keysArray);
    });

    document.addEventListener('keydown', (event) => {
      switch(event.key.toLowerCase()) {
        case 'w':
          this.coordX -= 1;
          keysArray['up'] = true;
          break;
        case 'a':
          this.coordY -= 1;
          keysArray['left'] = true;
          break;
        case 's':
          this.coordX += 1;
          keysArray['down'] = true;
          break;
        case 'd':
          this.coordY += 1;
          keysArray['right'] = true;
          break;
      }
      console.log(keysArray);
    })
  }

}

export default HumanPlayer;

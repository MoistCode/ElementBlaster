# Ball Blaster
[Ball Blaster](https://moistcode.github.io/BallBlaster/)  

Where Balls Blast other Balls  


## Ball Blaster
Ball Blaster is a game in which a player is represented as an ordinary circle in our three-dimensional world. However, in the two-dimensional world, you are no longer just a circle. You are reborn into a warrior fighting for survival as other circles try to take everything you know and love, your little circles.

This game is hugely inspired by the simple game of Rock-Paper-Scissors, where every single element in the game overcomes the other and vice-versa. It is bias towards those with quicker reflexes.

The elements in this game is not rock nor paper nor scissor, but of the classical elements: fire, water, lightning, and earth. 

Blast through AIs and random boss fights as you are playing rounds upon rounds of rapid rock-paper-scissors. Players must be able to quickly identify the classical element that is being thrown at them. Responding correctly will overcome but one wrong move and it's one step closer to implosion.

## Functionalities & MVPs List

**Game**
* Fits on a standard screen without scrolling
* Shows current classical element
* Shows current power-up and timer

**HumanPlayers**
* Can shoot elements of four types
* Can change type of element blasted
* Increases health when successfully blasting a ball

**ComputerPlayers**
* Can shoot elements on four types
* Automated dodge percentage
* Automated counterattack percentage

**Power-Ups**
* Player gets increase blast strength if Power+ is picked up for 10 seconds
* Player gets increase health percentage if Health%+ if picked up for 10 seconds
* Player becomes invincible for 5 seconds if Invincibility is picked up
* Player gets increase blast radius if Radius+ is picked up for 10 seconds

**Controls**
* Blasting responds to left mouse click
* Changing elements responds to tab

**Settings**
* Start button is shown
  * Game does not automatically start
  * Game starts upon clicking 'Start'
* Clear rules of the game are shown
  * Shows the elements, their strengths, and their weaknesses
* Allows users to mute music
* Allows users to increase number to Computer Players

## Architecture & Technologies

This project will be implemented using the following technologies:

* Vanilla JavaScript for overall structure and game logic
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up various scripts

In addition to the webpack entry file, `game.js`, there will be six other scripts involved in this project:

* `player.js`: provides overall characteristic common across all players such as types of `classicalElements`
* `humanplayer.js`: determines the appropriate actions and logical steps taken in response to the users and other players
* `computerplayer.js`: houses scripts to automate `dodgePercent`, `counterPercentage`, and `movement`
* `environmentjs`: houses scripts to automatically generate the environment such as barricades
* `powerups.js`: determines the characteristics imported by the player when picking up a `powerup`
* `util.js`: supports the overall game and houses code used across two or more classes

## Wireframe

This application will consist of a single screen with a simulation canvas. On the right hand side, the option to start the game, manipulate AI generation numbers, and volume are shown. Also on the right are clear instructions and rules of the game amongst the controls needed to play the game.

The start button will be clear as to what it will do

The rules/instructions will explain to the user how the game is played. What they need to avoid and what the objective of the game is. Amongst these rules are is the classical element style, which explains the types of elements, their strengths, and weaknesses.

The controls section will explain which keys are being used to play the game. Such as WASD, arrow keys, and mouse clicks.

Settings will allow the user to set the generation numbers of AIs and volume.

![](https://i.imgur.com/n9m84Yz.png)

## Timeline

**Over the weekend:**
Setup all necessary Node modules, including getting webpack up and running. Create webpack.config.js as well as package.json. Write a basic entry file and the bare bones of all 6 scripts outlined above.
- [x] Create a `webpack.config.js` file
- [x] Generate `bundle.js` and ensure it's working with the entry file
- [x] Collision detection tutorials
- [x] Projectiles tutorials
- [x] Create basic visual frames
- [x] Barebones of the 6 scripts above

**Day 1:**
This day is dedicated to writing the responsiveness and characteristics of the human player. How it should act when a key is pressed. The environment will also be worked on to randomly generate barricades in the game. Collision logic will be started.
- [x] Complete ball response to keys
- [ ] Create a random-generator for barricades
- [ ] Start on collision logic

**Day 2:**
This day is dedicated to collision and projectiles. To have players and projectiles collide and response appropriately with barricades will translate to working collision and projectile logic for computer players.
- [ ] Complete collision logic
- [ ] Complete projectiles logic

**Day 3:**
This day is dedicated to testing collision and projectiles with computer players and writing the behavior of computer players.
- [ ] Complete logic in response to being hit by a projectile
- [ ] Complete `dodgePercent`, `counterPercent`, and `movement` of computer players
- [ ] Complete all automated behavior of computer players

**Day 4:**
This day is dedicated to testing and providing a boss player
- [ ] Generate characteristics of a boss player (i.e., spawn rate, blasts, speed, size, etc.)
- [ ] Ensure appropriate spawn rates for boss players
- [ ] Add an endless option if user does not wish for the game to end

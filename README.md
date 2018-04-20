# Elemnt Blaster
[Element Blaster](https://moistcode.github.io/ElementBlaster/)  

In a land, where you become a spherical hero...


## Element Blaster
Element Blaster is a game in which a player is represented as an ordinary blob in our three-dimensional world. However, in the two-dimensional world, you are no longer just a blob. You are reborn into a warrior fighting for survival as other elements try to take everything you know and love, your little blobs.

This game is hugely inspired by the simple game of Rock-Paper-Scissors, where every single element in the game overcomes the other and vice-versa. It is bias towards those with quicker reflexes.

The elements in this game is not rock nor paper nor scissor, but of the classical elements: fire, water, lightning, and earth. 

Blast through your enemies as you are playing rounds upon rounds of rapid rock-paper-scissors. Players must be able to quickly identify the classical element that is being thrown at them. Responding correctly will overcome but one wrong move and it's one step closer to implosion.

## Functionalities & MVPs List

**Game**
* Fits on a standard screen without scrolling
* Shows current classical element

**HumanPlayers**
* Can shoot elements of four types
* Can change type of element blasted

**ComputerPlayers**
* Can shoot elements on four types
* Automated movements
* Automated blasts

**Controls**
* Blasting responds to left arrow, right arrow, up arrow, and down arrow
* Changing elements responds to 'q' and 'e'

**Settings**
* Restart button is shown
* Clear rules of the game are shown
  * Shows the elements, their strengths, and their weaknesses
* Allows users to pause music
* Allows users to increase number to Computer Players (i.e., easy, medium, hard, extreme)

## Architecture & Technologies

This project will be implemented using the following technologies:

* Vanilla JavaScript for overall structure and game logic
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up various scripts

In addition to the webpack entry file, `game.js`, there will be six other scripts involved in this project:

* `player.js`: provides overall characteristic common across all players such as types of `classicalElements`
* `humanplayer.js`: determines the appropriate actions and logical steps taken in response to the users and other players
* `computerplayer.js`: houses scripts to automate `dodgePercent`, `counterPercentage`, and `movement`
* `elements.js': creation of elements or bullets
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
- [x] Style projectiles into bullets
- [x] Start on collision logic

**Day 2:**
This day is dedicated to collision and projectiles. To have players and projectiles collide and response appropriately with barricades will translate to working collision and projectile logic for computer players.
- [x] Complete collision logic
- [x] Complete projectiles logic

**Day 3:**
This day is dedicated to testing collision and projectiles with computer players and writing the behavior of computer players.
- [x] Complete logic in response to being hit by a projectile
- [x] Complete computer element project tiles, self elements, and movements
- [x] Complete all automated behavior of computer players

**Day 4:**
This day is dedicated to testing and providing difficulties
- [x] Add restart and difficult buttons
- [x] Ensure appropriate amount of computer players per difficulty
- [x] Add an endless option if user does not wish for the game to end
- [x] Add gameover screen
- [x] Add start button

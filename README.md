<p align="center"> 
  
  <a href="https://moistcode.github.io/ElementBlaster/">
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/images/human.png">
  </a>
  
   <a href="https://moistcode.github.io/ElementBlaster/">
    <h1 align="center">Element Blaster</h1>
  </a>
  
  <p align="center"><i>"In a land, where you become a spherical hero..."</i></p>
</p> 

## Element Blaster
Element Blaster is a game in which a player is represented as an ordinary blob in our three-dimensional world. However, in the two-dimensional world, you are no longer just a blob. You are reborn into a warrior fighting for survival as other elements try to take everything you know and love, your little blobs.

This game is hugely inspired by the simple game of Rock-Paper-Scissors, where every single element in the game overcomes the other and vice-versa. It is bias towards those with quicker reflexes.

The elements in this game is not rock nor paper nor scissor, but of the classical elements: fire, water, lightning, and earth.

Blast through your enemies as you are playing rounds upon rounds of rapid rock-paper-scissors. Players must be able to quickly identify the classical element that is being thrown at them. Responding correctly will overcome but one wrong move and it's one step closer to implosion.

- [Features](#features)
- [Collision Logic](#collision-logic)
- [Projectile Logic](#projectile-logic)
- [Project Direction](#project-direction)

<a name="technologies">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Teachnologies
  </h2>  
</a>
  
|HTML5/CSS3/JavaScript|
|:-------------------------:|
|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage(4).png">|

<a name="features">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Features
  </h2>  
</a>

<a name="destroy">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Destroy thy Enemies with Rapid Elemental Blasts!
  </h2>  
</a>

<a name="difficulty">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Too easy? Change difficult and try thy hand at becoming the top...sphere??
  </h2>  
</a>

<a name="collision-logic">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Sample Collision Logic
  </h2>  
</a>
  Navigate seamlessly as creation is automatically updated and refreshed to show the most recently updated posts on your dashboard. Preview your uploaded items before creating them. No one likes those broken links...yuck... Currently supported types are quotes, long texts, audios, videos, and photos.

``` javascript
  const handleCollision = (player1, player2) => {
  let x1 = player1.coordX;
  let y1 = player1.coordY;

  let x2 = player2.coordX;
  let y2 = player2.coordY;

  let dx = x2 - x1;
  let dy = y2 - y1;

  let rotatedAngle = -Math.atan2(dy, dx);

  let u1 = rotate({ x: player1.velocityX, y: player1.velocityY }, rotatedAngle);
  let u2 = rotate({ x: player2.velocityX, y: player2.velocityY }, rotatedAngle);

  let v1 = { x: u2.x, y: u1.y };
  let v2 = { x: u1.x, y: u2.y };

  let finalVel1 = rotate(v1, -rotatedAngle);
  let finalVel2 = rotate(v2, -rotatedAngle);

  player1.velocityX = finalVel1.x;
  player1.velocityY = finalVel1.y;

  player2.velocityX = finalVel2.x;
  player2.velocityY = finalVel2.y;

  let xPow = Math.pow(player2.coordX - player1.coordX, 2);
  let yPow = Math.pow(player2.coordY - player1.coordY, 2);
  let distance = Math.sqrt(xPow + yPow);

};

const 1DRotation = (velocity, angle) => {
  const rotatedVelocities = {
      x: velocity.x * Math.cos(angle * (180/Math.PI)) - velocity.y * Math.sin(angle * (180/Math.PI)),
      y: velocity.x * Math.sin(angle * (180/Math.PI)) + velocity.y * Math.cos(angle * (180/Math.PI))
  };

  return rotatedVelocities;
}
```

<a name="projectile-logic">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Sample Projectile Logic
  </h2>  
</a>

```javascript 
      this.context.beginPath();
        this.context.rect(
          this.posX - (13/2),
          this.posY + 40,
          13,
          13
        );
        switch(this.element) {
          case 'Fire':
            this.context.fillStyle = 'red';
            break;
          case 'Earth':
            this.context.fillStyle = '#7B1803';
            break;
          case 'Lightning':
            this.context.fillStyle = '#F5EE10';
            break;
          case 'Water':
            this.context.fillStyle = 'blue';
            break;
        }
        this.context.fill();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(this.posX, this.posY + 52, 7, 0, Math.PI);
        this.context.fillStyle = 'white'
        this.context.fill();
        this.context.closePath();

        this.posY += this.velocity;
        this.lifeline -= 1;
```

<a name="project-direction">
  <h2>
    <img src="https://raw.githubusercontent.com/MoistCode/ElementBlaster/gh-pages/assets/favicons/favicon-16x16.png">
      Project Direction
  </h2>  
</a>

* Placeholder

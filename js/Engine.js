// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time
class Engine {
  // The constructor has one parameter. It will refer to the DOM node that we will be adding everything to.
  // You need to provide the DOM node when you create an instance of the class
  constructor(theRoot) {
    // We need the DOM element every time we create a new enemy so we
    // store a reference to it in a property of the instance.
    this.root = theRoot;
    // We create our hamburger.
    // Please refer to Player.js for more information about what happens when you create a player
    this.player = new Player(this.root);
    // Initially, we have no enemies in the game. The enemies property refers to an array
    // that contains instances of the Enemy class
    this.enemies = [];
    // We add the background image to the game
    addBackground(this.root);

    this.score = new Score(this.root);

    this.bonuses = [];

    this.weapon = new Weapon();

    this.ammo = new Ammo(this.root, this.weapon.availableShots - 1);
  }

  // The gameLoop will run every few milliseconds. It does several things
  //  - Updates the enemy positions
  //  - Detects a collision between the player and any enemy
  //  - Removes enemies that are too low from the enemies array
  gameLoop = () => {
    // This code is to see how much time, in milliseconds, has elapsed since the last
    // time this method was called.
    // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
    // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
    // We use filter to accomplish this.
    // Remember: this.enemies only contains instances of the Enemy class.
    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    // We need to perform the addition of enemies until we have enough enemies.
    while (this.enemies.length < MAX_ENEMIES) {
      // We find the next available spot and, using this spot, we create an enemy.
      // We add this enemy to the enemies array
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    //Add bonus
    this.bonuses.forEach((bonus) => {
      bonus.update(timeDiff);
    });

    this.bonuses = this.bonuses.filter((bonuses) => {
      return !bonuses.destroyed;
    });

    while (this.bonuses.length < MAX_BONUS) {
      const bonusSpot = nextBonusSpot();
      let bonus = new Bonus(this.root, bonusSpot);
      this.bonuses.push(bonus);
    }

    // Get bonus
    if(this.getBonus()){
      //Add 100 just once to the score
      let done = false;
      if(!done){
        this.score.points += 100;
        this.score.div.style.color = "green";
        this.score.div.style.transition = "0.1s";
        this.score.div.style.fontSize = "3em";
        done = true;
      } 
    }
    else{
      this.score.div.style.fontSize = "2em";
      this.score.div.style.color = "white";
    }


    // We check if the player is dead. If he is, we alert the user
    // and return from the method (Why is the return statement important?)
    if (this.isPlayerDead()) {
      new Message(this.root, 150, 100, this.score);
      return;
    }

    this.score.increment();

    // If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds
    setTimeout(this.gameLoop, 20);
  };

  // This method is not implemented correctly, which is why
  // the burger never dies. In your exercises you will fix this method.
  isPlayerDead = () => {
    let currentSpotEnemy = this.enemies.filter(
      (enemy) => this.player.spot === enemy.spot
    );

    if (currentSpotEnemy[0]) {
      if (
        this.player.y >=
          Math.round(currentSpotEnemy[0].y) - PLAYER_HEIGHT  &&
        this.player.y <= Math.round(currentSpotEnemy[0].y) + PLAYER_HEIGHT 
      ) {
        return true;
      }
    }
    return false;
  };

  getBonus = () => {
    let currentBonusSpot = this.bonuses.filter( bonus => this.player.spot === bonus.bonusSpot);
    if(currentBonusSpot[0]){
      if(this.player.y >= Math.round(currentBonusSpot[0].y) - PLAYER_WIDTH && this.player.y <= Math.round(currentBonusSpot[0].y) + PLAYER_WIDTH){
        return true;
      }
      return false;
    }
  }
}

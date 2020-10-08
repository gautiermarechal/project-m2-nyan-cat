class Bonus {
  constructor(root, bonusSpot) {
    this.root = root;
    this.bonusSpot = bonusSpot;

    this.x = bonusSpot;
    this.y = -BONUS_HEIGHT;
    this.destroyed = false;

    this.domElement = document.createElement("img");

    this.domElement.src = "./images/bonus_logo.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;
    this.domElement.style.width = BONUS_HEIGHT;
    this.domElement.style.width = BONUS_WIDTH;

    root.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
}

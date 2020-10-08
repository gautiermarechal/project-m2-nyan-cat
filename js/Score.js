class Score {
  constructor(root) {
    this.points = 0;

    this.div = document.createElement("h1");
    this.div.style.position = "absolute";
    this.div.style.zIndex = 5000;
    this.div.style.left = 10;
    this.div.style.top = 0;
    this.div.style.color = "white";
    this.div.innerHTML = this.points;

    root.appendChild(this.div);
  }

  increment() {
    this.points++;
    this.div.innerHTML = this.points;
  }
}

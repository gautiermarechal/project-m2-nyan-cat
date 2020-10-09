// This class is not used in the project yet.
class Message {
  // The constructor has three parameters. Here is an example of how you would create
  // an instance of this class
  constructor(root, xPos, yPos, currentScore) {
    // We create a DOM element, set its CSS attributes then append it to the parent DOM element. We also
    // set the \`domElement\` property of the instance to the newly created DOM element so we can update it later
    const div = document.createElement("div");
    const restart = document.createElement("button");
    const score = document.createElement("h3");

    //Game over div
    div.style.position = "absolute";
    div.style.left = `${xPos}px`;
    div.style.top = `${yPos}px`;
    div.style.width = "300px";
    div.style.height = "200px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.color = "white";
    div.style.backgroundImage = "url('./images/stars.png')";
    div.style.borderStyle = "solid";
    div.style.borderColor = "#FF97FF";
    div.style.borderWidth = "5px";
    div.style.padding = "2.5px";
    div.style.animation = "spin 10s linear";
    div.style.font = "bold 30px Impact";
    div.style.zIndex = 2000;

    div.innerHTML = "Game Over";

    //Score
    score.innerHTML = `Score: ${currentScore.points}`;
    console.log(currentScore);
    //Button restart
    restart.style.width = "150px";
    restart.style.height = "50px";
    restart.style.marginTop = "10px";
    restart.style.backgroundColor = "transparent";
    restart.style.borderColor = "white";
    restart.style.borderStyle = "solid";
    restart.style.borderWidth = "5px";
    restart.style.color = "white";
    restart.style.transition = "0.2s";
    restart.onmouseover = function () {
      restart.style.color = "black";
      restart.style.backgroundColor = "white";
      restart.style.cursor = "pointer";
    };
    restart.onmouseout = function () {
      restart.style.color = "white";
      restart.style.backgroundColor = "transparent";
    };
    restart.onclick = function () {
      div.style.display = "none";
      gameEngine.score.points = 0;
      gameEngine.gameLoop();
    };

    restart.innerHTML = "Restart";

    root.appendChild(div);
    div.appendChild(score);
    div.appendChild(restart);

    this.domElement = div;
  }

  // This method is used to update the text displayed in the DOM element
  update(txt) {
    this.domElement.innerText = txt;
  }
}

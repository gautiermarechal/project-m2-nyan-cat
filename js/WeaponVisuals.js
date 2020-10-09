class WeaponVisuals {
    constructor(root, explosionSpots){
        this.root = root;
        if(explosionSpots.length === 2){
            this.explosion1 = document.createElement("img");
            this.explosion2 = document.createElement("img");

            this.explosion1.src = "images/explosion.svg";
            this.explosion1.style.left = explosionSpots[0] * BONUS_WIDTH;
            this.explosion1.style.top = GAME_HEIGHT - PLAYER_WIDTH * 2;
            this.explosion1.style.position = "absolute";
            this.explosion1.style.width = PLAYER_WIDTH;
            this.explosion2.src = "images/explosion.svg";
            this.explosion2.style.left = explosionSpots[1] * BONUS_WIDTH;
            this.explosion2.style.top = GAME_HEIGHT - PLAYER_WIDTH * 2;
            this.explosion2.style.position = "absolute";
            this.explosion2.style.width = PLAYER_WIDTH;


            console.log("HEYYYY");
            this.root.appendChild(this.explosion1);
            this.root.appendChild(this.explosion2);
        }
        else{
            this.explosion1 = document.createElement("img");
            this.explosion2 = document.createElement("img");
            this.explosion3 = document.createElement("img");

            this.explosion1.src = "images/explosion.svg";
            this.explosion1.style.left = explosionSpots[0] * BONUS_WIDTH;
            this.explosion1.style.top = GAME_HEIGHT - PLAYER_WIDTH * 2;
            this.explosion1.style.position = "absolute";
            this.explosion1.style.width = PLAYER_WIDTH;
            this.explosion2.src = "images/explosion.svg";
            this.explosion2.style.left = explosionSpots[1] * BONUS_WIDTH;
            this.explosion2.style.top = GAME_HEIGHT - PLAYER_WIDTH * 2;
            this.explosion2.style.position = "absolute";
            this.explosion2.style.width = PLAYER_WIDTH;
            this.explosion3.src = "images/explosion.svg";
            this.explosion3.style.left = explosionSpots[2] * BONUS_WIDTH;
            this.explosion3.style.top = GAME_HEIGHT - PLAYER_WIDTH * 2;
            this.explosion3.style.position = "absolute";
            this.explosion3.style.width = PLAYER_WIDTH;

            console.log("HEYYYY2");

            this.root.appendChild(this.explosion1);
            this.root.appendChild(this.explosion2);
            this.root.appendChild(this.explosion3);
        }
        

    }
}
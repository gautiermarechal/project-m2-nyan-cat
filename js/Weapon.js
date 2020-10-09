class Weapon {
    constructor(){
        this.range = []
        this.availableShots = 3;
    }

    defineRange = (spot) => {
        if(this.availableShots > 0){
            this.availableShots -= 1;
            if(spot === 0) {
                this.range = [spot,spot + 1]
            }
            else if(spot === 4){
                this.range = [spot - 1,spot]
            }
            else{
                this.range = [spot - 1, spot, spot + 1]
            }
        }
        
    }

    reduceAmmo = () =>{
        this.availableShots -= 1;
    }

    shot = (enemies) => {
        if(this.availableShots < 3){
            enemies = enemies.filter((enemy) => {
                return !enemy.destroyed;
              });
            this.range.forEach((enemyPosition) => {
                enemies.forEach((enemy, i) => {
                    if(enemy.spot === enemyPosition){
                        gameEngine.enemies[i].destroyed = true;
                        console.log(gameEngine.enemies[i]);
                        gameEngine.enemies[i].domElement.style.display = "none";
                    }
                })
            })
        }
        
    }
}
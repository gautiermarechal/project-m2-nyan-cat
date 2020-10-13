class Weapon {
    constructor(){
        this.range = []
        this.availableShots = 4;
    }

    defineRange = (spot) => {
        if(this.availableShots > 0){
            console.log(this.availableShots);
            this.reduceAmmo()
            if(spot === 0) {
                this.range = [spot,spot + 1]
            }
            else if(spot === 10){
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
        if(this.availableShots > 0){
            enemies = enemies.filter((enemy) => {
                return !enemy.destroyed;
              });
            this.range.forEach((enemyPosition) => {
                enemies.forEach((enemy, i) => {
                    if(enemy.spot === enemyPosition){
                        gameEngine.enemies[i].destroyed = true;
                        gameEngine.enemies[i].domElement.style.display = "none";
                    }
                })
            })
        }
        
    }
}
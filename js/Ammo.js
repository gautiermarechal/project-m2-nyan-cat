class Ammo {
    constructor(root, availableAmmo){
        this.root = root;
        this.availableAmmo = availableAmmo;

        this.div = document.createElement("h2");
        this.div.style.position = "absolute";
        this.div.style.zIndex = 5000;
        this.div.style.left = 10;
        this.div.style.top = 50;
        this.div.style.color = "white";
        this.div.innerHTML = `Ammo: ${this.availableAmmo}`;

        this.div2 = document.createElement("h3");
        this.div2.style.position = "absolute";
        this.div2.style.zIndex = 5000;
        this.div2.style.left = 10;
        this.div2.style.top = 100;
        this.div2.style.color = "white";
        this.div2.innerHTML = "Press S to shot!";

        root.appendChild(this.div);
        root.appendChild(this.div2);
    }

    decrement = () => {
        if(this.availableAmmo !== 0){
            this.availableAmmo -= 1;
            this.div.innerHTML = `Ammo: ${this.availableAmmo}`;
        }
    }


}
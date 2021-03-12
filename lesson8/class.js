
class Bicycle {
    constructor(){
        this.speed = 0;
    }

    applyBrake(v) {
        this.speed = v;
    }

    speedup(v) {
        this.speed = v;
    }
}

class MountainBicycle {
    constructor(){
        this.gear = 1;
    }

    setGear(v) {
        this.gear = v;
    }
}

MountainBicycle.prototype = Bicycle;

let bicycleObj = new Bicycle();
console.log(bicycleObj);


let moutainBike = new MountainBicycle(bicycleObj);
console.log(moutainBike);
console.log(MountainBicycle.prototype);
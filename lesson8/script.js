"use strict";

let bicycleFactory = function(){
    let animal = {eat: true};
    let createBicyclePrototye = function (){
        return {
            speed: 0,
            applyBrake: function(value) {
                this.speed = value;
            },
            speedUp: function(value) {
                this.speed = value;
            }
        }
    }();
    
    let createMountainBikeProtoype = function(pro){
        let moutainBike = Object.create(pro);
        moutainBike.gear = 1;
        moutainBike.setGear = function(value) {
            this.gear = value;
        };
        return moutainBike;
    }(createBicyclePrototye)
    
    let start = function() {
        return {
            bicyclePrototype : createBicyclePrototye,
            mountainBikePrototype : createMountainBikeProtoype,
        }
    };
    return {start, createBicyclePrototye, createMountainBikeProtoype};
}();


let bicycleObj = Object.create(bicycleFactory.createBicyclePrototye);
let myMountainBic = Object.create(bicycleFactory.createMountainBikeProtoype);

console.log(bicycleObj.speed);
bicycleObj.speedUp(5)
console.log(bicycleObj.speed);

console.log(myMountainBic.gear);
myMountainBic.setGear(7);
console.log(myMountainBic.gear);
console.log(myMountainBic.speed);
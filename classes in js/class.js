
class car {
    constructor(name,model,color,speed,topSpeed,currentSpeed){
     this.name = name;
     this.model = model;
     this.color = color;
     this.speed = speed;
     this.topSpeed = topSpeed;
     this.currentSpeed =30;





    }
    drive(){
        console.log('just drive 2 miles')
        this.currentSpeed -=20;
        console.log(`driving at ${this.currentSpeed} careful dude`)
        
    }
    brake(){
        console.log('break is weak ')

    }
}

const ferrari = new car("ferrari", "1940", " red", 1000);
console.log(ferrari);
console.log(ferrari);
ferrari.drive();
ferrari.brake();
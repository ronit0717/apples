class Car{
    constructor(){
        this.wheels = 4;
        this.type = 'HatchBack';
    }    
}

class Hyundai extends Car{
    constructor(){
        super();
        this.windows = 4;
    }
}


const car = new Car();
const hyundai = new Hyundai();

console.log(hyundai.wheels);
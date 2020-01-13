
var car = {
    brand: "Fiat",
    model: "500L",
    color: "white",
    model: 2012,
    getAge:function(){
        return new Date().getFullYear()-this.model
    }
};

car.getAge2 = function(){
    return new Date().getFullYear()-this.model
}

console.log(car.getAge2());
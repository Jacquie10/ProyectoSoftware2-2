import VehicleFactory from "./VehicleFactory";

const factory = new VehicleFactory();

const monocycle = factory.createVehicle(1);
console.log(monocycle.description()); //output I have 1 wheel and I am of the monocycle type

const motorcycle = factory.createVehicle(2);
console.log(motorcycle.description()); //output I have 2 wheels and I am of the motorcycle type

const car = factory.createVehicle(4);
console.log(car.description()); //output I have 4 wheels and I am of the car type

const trailer = factory.createVehicle(6);
console.log(trailer.description()); //output I have 6 wheels and I am of the trailer type

factory.createVehicle(8); //output Vehicle error not found

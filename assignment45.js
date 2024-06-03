"use strict";
function store_car_info(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with the required information and additional name-value pairs
const car1 = store_car_info('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true]);
const car2 = store_car_info('Tesla', 'Model 3', ['color', 'red'], ['autopilot', true], ['wheels', '19 inch']);
// Print the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);

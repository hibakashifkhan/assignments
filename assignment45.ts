interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = {
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

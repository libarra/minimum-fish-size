
// Function to convert from cm to other units
function cmToOtherUnits(cm) {
    let inches = (cm * 0.393701).toFixed(2);
    let feet = (cm * 0.0328084).toFixed(2);
    let meters = (cm / 100).toFixed(2);
    return {
        inches: inches,
        feet: feet,
        meters: meters
    };
}

// Function to convert from in to other units
function inToOtherUnits(inches) {
    let cm = (inches * 2.54).toFixed(2);
    let feet = (inches / 12).toFixed(2);
    let meters = (inches * 0.0254).toFixed(2);
    return {
        cm: cm,
        feet: feet,
        meters: meters
    };
}

// Function to convert from ft to other units
function ftToOtherUnits(feet) {
    let cm = (feet * 30.48).toFixed(2);
    let inches = (feet * 12).toFixed(2);
    let meters = (feet * 0.3048).toFixed(2);
    return {
        cm: cm,
        inches: inches,
        meters: meters
    };
}

// Function to convert from m to other units
function mToOtherUnits(meters) {
    let cm = (meters * 100).toFixed(2);
    let inches = (meters * 39.3701).toFixed(2);
    let feet = (meters * 3.28084).toFixed(2);
    return {
        cm: cm,
        inches: inches,
        feet: feet
    };
}

// Use exmaple:
let cmValue = 100;
console.log(`De ${cmValue} cm a otras unidades:`, cmToOtherUnits(cmValue));

let inchesValue = 39.37;
console.log(`De ${inchesValue} in a otras unidades:`, inToOtherUnits(inchesValue));

let feetValue = 3.28;
console.log(`De ${feetValue} ft a otras unidades:`, ftToOtherUnits(feetValue));

let metersValue = 1;
console.log(`De ${metersValue} m a otras unidades:`, mToOtherUnits(metersValue));


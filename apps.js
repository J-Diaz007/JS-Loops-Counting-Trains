// Data provided by Silver Track Railways in the form of THREE ARRAYS
let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// WRITE SOME LOOPS

// USE WHILE LOOP TO ITERATE THROUGH CAR MODELS
let i = 0

while(i < newInventoryCarModels.length){
    console.log(`${newInventoryCarModels[i]} is of type: ${newInventoryCarTypes[i]}`)
    // Was missing the `${newInventoryCarModels[i]} is of type: ${newInventoryCarTypes[i]}` grabbed from solution code
    i++
}
console.log()

// ///////////////////////////////////////////////////////////////////
// CODE PAST THIS POINT WAS DONE AS A CODE ALONG /////////////////////
// ///////////////////////////////////////////////////////////////////

// DECLARE ITERATOR
let x = 0

//New variable called typeS1Count and initialize to 0
let typeS1Count = 0

while(x < newInventoryCarModels.length){
    if(newInventoryCarModels[x] === 'S1'){
        typeS1Count++
    }
    x++
}

// RUN CODE COUNTING S1 CARS
console.log(`Number of S1 Cars is: ${typeS1Count}`)

// FOR LOOP WITH VARIABLE lorrieCount 
let lorriesCount = 0 
//  IF STATEMENT THAT CHECKS IF THE CAR MODEL IS "Lorrie"
for(let i = 0; i < newInventoryCarModels.length; i++){
    if(newInventoryCarTypes[i] === 'Lorrie'){
        lorriesCount++
    }
}
// AFTER LOOP IS CLOSED, CONSOLE LOG HOW MANY LORRIES ARE FOUND
console.log(`There are ${lorriesCount} Lorries.` )



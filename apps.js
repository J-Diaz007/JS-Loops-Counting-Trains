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

//New variable called typeS1Count and initialize to 0
let typeS1Count
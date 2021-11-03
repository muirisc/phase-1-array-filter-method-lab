// Code your solution here
function findMatching(array, name) {
const result = []
for (const driver of array)
    if (driver.toLowerCase() == name.toLowerCase()){
        result.push(driver)
    }
    return result 
}

function fuzzyMatch(array, letter){
const result2 = []
for (const driver of array)
    if (driver.charAt(0) == letter.charAt(0)){
        result2.push(driver)
    }
    return result2
}

function matchName(array, string){
const result3 = []
for (const driver of array)
    if (driver.name == string){
    
        result3.push(driver)
}
    return result3
}
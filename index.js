// Write your solution in this file!
let employee = {
    name:"ian",
    streetAddress:"langata"
}
function updateEmployeeWithKeyAndValue(obj,key,value){
    obj = {...employee}
    obj[key]=value
    return obj
    

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee

}
function deleteFromEmployeeByKey(obj,key){
    obj={...employee}
    delete obj[key]
    return obj

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee

}
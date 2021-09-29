// Write your solution in this file!
const employee = {
    name: "Niku",
    streetAddress: "866 Woodward Ave",
};

function updateEmployeeWithKeyAndValue() {
    const newEmployee = {...employee};

    newEmployee ["name"] = "Sam";
    newEmployee ["streetAddress"] = "11 Broadway";

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee ["streetAddress"] = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey() {
    const newEmployee = {...employee};

    delete newEmployee["name"];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee ["name"];

    return employee;
}
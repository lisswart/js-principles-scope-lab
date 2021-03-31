// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Meg';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'Shaw';
}
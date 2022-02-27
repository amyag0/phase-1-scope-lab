var customerName = "bob";//test 1

function upperCaseCustomerName(){ //test2
    customerName = customerName.toUpperCase(); 
}


function setBestCustomer(){
    bestCustomer = "not bob";
}



function overwriteBestCustomer(){
    setBestCustomer();
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Bob";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bobs friend";

}
//normal addFive() function
function addFive(num) {
    return num + 5;
}
    // TODO: Convert addFive() to arrow function
    let add = num =>{
        return num + 5;
    }
//normal divideBy() function
    function divideBy(x, y) {
    return x / y;
    }
    // TODO: Convert divideBy() to arrow function
    let divide = (x,y) =>{
        return x/y;
    }
//normal logtoConsole() function
    function logToConsole() {
    let msg = "MIT Coding Certificate";
    console.log(msg);
    }
    // TODO: Convert logToConsole() to arrow function
    let result = () => {
        let msg = "MIT Coding Certificate";
        console.log(msg);
    }

 //print   
    console.log(add(10));
    console.log(divide(50,5));
    result();

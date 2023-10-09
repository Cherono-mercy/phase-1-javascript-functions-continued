// Function that has a default argument
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

//Defining a function using a function expression to solve the problem of accessing an anonymous function
const mondayWork = function (plan = "go to the office"){
    return `This Monday, I will ${plan}.`
}
//Defining function-level scope
function wrapAdjective(adjective){
    return function wrap(text){
        return `You are ${adjective}${text}${adjective}!`
    }
}
let adjective = wrapAdjective ('||');
let nest = adjective('a dedicated programmer');

let emphatic = wrapAdjective('*')('a hard worker');
let other = wrapAdjective('||')('a dedicated programmer');

console.log(emphatic,'\n',other);




    

    

  
    


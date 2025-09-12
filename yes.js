

let greet = function(name){
  console.log('greetings dear ' + name)
};

greet('micay')

//*greetings function


let squared = function( value){
  
  return value * value
};

console.log(squared(5));

//*squared function

setTimeout(greet('rb'), 4000);
//* setTimeout -- function in a function

greetrb = name => console.log('greetings dear ' + name);
greetrb('rb')
//* arrow function
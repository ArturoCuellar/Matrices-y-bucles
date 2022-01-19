//Exercise 1

//Part One
var people=["Sofía","David","Juan"];

console.log(people);


//Part 2

people.push("Sara","Agustin");
people.shift();
console.log(people);

people.splice(1,0,"Renata");
people.push("Elena");
console.log(people);

//Excercise 2

for(let i =1; i<=5; i++){
    let resultado = '';
    for(let j=1; j<=i; j++){
        resultado += '*';
    }
    console.log(resultado);
}

//Exercise 3

//Part One
/*
let x=15;

while(x>=0){
    console.log(x);
    x -=0.5;

}/

//Part Two
/
let oddnumbers=1

while(oddnumbers<100){
    console.log(oddnumbers);
    oddnumbers += 2;

}
/
//PART THREE
/
var w=1;
let m='';
while(w<=6){
    m=m+"["+w+"]";
    w++;
}
console.log(m);
*/

/*
let suma = 0;
let n = 20;
let i = 0;
while (i < n) {
    i++;
    suma += i;
}
console.log(suma);

*/